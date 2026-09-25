#!/usr/bin/env node
/**
 * Marketing accessibility gate: axe-core WCAG 2.2 A/AA via Playwright.
 *
 * - Fails on violations
 * - Retains incomplete (inconclusive) findings for manual review
 * - Writes sanitized artifacts (commit, route, state, viewport, tool versions)
 */

import { spawnSync } from 'node:child_process'
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import { detectImpact, gitChangedFiles, loadMap } from './detect-ui-impact.mjs'
import { sanitizeArtifact } from './sanitize.mjs'
import { createStaticServer } from './static-server.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ARTIFACT_DIR = process.env.A11Y_ARTIFACT_DIR || join(ROOT, 'a11y-results')

function packageVersion(name) {
  try {
    const pkg = JSON.parse(readFileSync(join(ROOT, 'node_modules', name, 'package.json'), 'utf8'))
    return pkg.version
  } catch {
    return 'unknown'
  }
}

function gitSha() {
  const r = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' })
  return r.status === 0 ? r.stdout.trim() : 'unknown'
}

async function applyState(page, state) {
  if (state === 'default') return
  if (state === 'menu-open') {
    const toggle = page.locator('.nav-toggle')
    // Desktop CSS hides the toggle; menu-open is a mobile drawer state.
    if (!(await toggle.isVisible())) {
      throw new Error('menu-open requires a visible .nav-toggle (use mobile viewport)')
    }
    await toggle.click()
    await page.locator('#site-nav.is-open').waitFor({ state: 'visible', timeout: 10_000 })
    return
  }
  throw new Error(`Unknown state: ${state}`)
}

async function scanPage({ page, origin, route, state, viewport, axeTags }) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height })
  const url = `${origin}${route.path === '/' ? '/' : route.path}`
  const response = await page.goto(url, { waitUntil: 'networkidle' })
  if (!response || !response.ok()) {
    throw new Error(`Failed to load ${url}: ${response?.status()}`)
  }
  await applyState(page, state)

  const builder = new AxeBuilder({ page }).withTags(axeTags)
  const results = await builder.analyze()
  return results
}

function summarizeRun(results) {
  return {
    violations: (results.violations || []).map((v) => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      helpUrl: v.helpUrl,
      nodes: (v.nodes || []).slice(0, 20).map((n) => ({
        target: n.target,
        failureSummary: n.failureSummary,
        html: n.html?.slice(0, 300),
      })),
    })),
    incomplete: (results.incomplete || []).map((v) => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      helpUrl: v.helpUrl,
      nodes: (v.nodes || []).slice(0, 10).map((n) => ({
        target: n.target,
        failureSummary: n.failureSummary,
      })),
    })),
    passesCount: (results.passes || []).length,
    inapplicableCount: (results.inapplicable || []).length,
  }
}

async function runSuite({ origin, routes, map, meta }) {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const runs = []
  let violationCount = 0
  let incompleteCount = 0

  try {
    for (const route of routes) {
      for (const state of route.states) {
        for (const viewport of map.viewports) {
          // Open-menu drawer is mobile-only (desktop nav toggle is CSS-hidden).
          if (state === 'menu-open' && viewport.id !== 'mobile') continue
          const page = await context.newPage()
          try {
            const raw = await scanPage({
              page,
              origin,
              route,
              state,
              viewport,
              axeTags: map.axe.tags,
            })
            const summary = summarizeRun(raw)
            violationCount += summary.violations.length
            incompleteCount += summary.incomplete.length
            const record = sanitizeArtifact({
              ...meta,
              route: route.path,
              state,
              viewport: {
                id: viewport.id,
                width: viewport.width,
                height: viewport.height,
              },
              url: `${origin}${route.path}`,
              result: summary,
              testsRun: true,
              mergeBlockingVerified: summary.violations.length === 0,
            })
            runs.push(record)
            const slug = [
              route.path === '/' ? 'home' : route.path.replace(/^\//, '').replace(/\//g, '_'),
              state,
              viewport.id,
            ].join('__')
            writeFileSync(
              join(ARTIFACT_DIR, 'runs', `${slug}.json`),
              JSON.stringify(record, null, 2)
            )
          } finally {
            await page.close()
          }
        }
      }
    }
  } finally {
    await context.close()
    await browser.close()
  }

  return { runs, violationCount, incompleteCount }
}

async function runFixtureGate() {
  const fixture = join(ROOT, 'a11y', 'fixtures', 'inaccessible.html')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()
  try {
    await page.goto(pathToFileURL(fixture).href)
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'])
      .analyze()
    return {
      violations: results.violations || [],
      incomplete: results.incomplete || [],
    }
  } finally {
    await page.close()
    await context.close()
    await browser.close()
  }
}

function writeSkipArtifact(meta, detection) {
  mkdirSync(ARTIFACT_DIR, { recursive: true })
  const summary = sanitizeArtifact({
    ...meta,
    decision: 'skip',
    message: detection.notApplicableMessage || detection.reason,
    testsRun: false,
    mergeBlockingVerified: false,
    note: 'Job completed with an explicit not-applicable result; browsers were not launched.',
    detection,
  })
  writeFileSync(join(ARTIFACT_DIR, 'summary.json'), JSON.stringify(summary, null, 2))
  process.stdout.write(`${summary.message}\n`)
}

async function main() {
  const map = loadMap()
  const force = process.env.A11Y_FORCE_RUN === '1' || process.argv.includes('--force')
  const fixtureOnly = process.argv.includes('--fixture-only')
  const skipFixture = process.argv.includes('--skip-fixture')
  const baseRef = process.env.A11Y_BASE_REF || ''
  const headRef = process.env.A11Y_HEAD_REF || 'HEAD'

  mkdirSync(join(ARTIFACT_DIR, 'runs'), { recursive: true })

  const meta = {
    commit: gitSha(),
    surface: map.surface,
    generatedAt: new Date().toISOString(),
    tools: {
      axeCore: packageVersion('axe-core'),
      axePlaywright: packageVersion('@axe-core/playwright'),
      playwright: packageVersion('playwright'),
    },
    axeTags: map.axe.tags,
  }

  if (fixtureOnly) {
    const fixture = await runFixtureGate()
    const ok = fixture.violations.length > 0
    const summary = sanitizeArtifact({
      ...meta,
      decision: 'fixture',
      testsRun: true,
      mergeBlockingVerified: ok,
      fixtureViolations: fixture.violations.map((v) => v.id),
      expected: 'deliberate inaccessible fixture must produce axe violations',
      passed: ok,
    })
    writeFileSync(join(ARTIFACT_DIR, 'summary.json'), JSON.stringify(summary, null, 2))
    if (!ok) {
      process.stderr.write('Fixture gate failed: inaccessible fixture produced zero violations\n')
      process.exit(1)
    }
    process.stdout.write('Fixture gate OK: inaccessible fixture produced violations\n')
    process.exit(0)
  }

  let detection
  if (force) {
    detection = detectImpact({ changedPaths: ['src/app/page.tsx'], map })
  } else if (!baseRef) {
    process.stderr.write('A11Y_BASE_REF is required unless A11Y_FORCE_RUN=1 or --force is set\n')
    process.exit(2)
  } else {
    const changedPaths = gitChangedFiles({ baseRef, headRef })
    detection = detectImpact({ changedPaths, map })
  }

  writeFileSync(
    join(ARTIFACT_DIR, 'detection.json'),
    JSON.stringify(sanitizeArtifact(detection), null, 2)
  )

  if (detection.decision === 'fail_detection') {
    process.stderr.write(`${detection.reason}\n`)
    process.exit(3)
  }

  if (detection.decision === 'skip') {
    writeSkipArtifact(meta, detection)
    process.exit(0)
  }

  if (!existsSync(join(ROOT, 'out', 'index.html'))) {
    process.stderr.write('Missing out/index.html — run `npm run build` first\n')
    process.exit(2)
  }

  if (!skipFixture) {
    const fixture = await runFixtureGate()
    if (fixture.violations.length === 0) {
      process.stderr.write('Fixture gate failed: inaccessible fixture produced zero violations\n')
      process.exit(1)
    }
    writeFileSync(
      join(ARTIFACT_DIR, 'fixture-gate.json'),
      JSON.stringify(
        sanitizeArtifact({
          ok: true,
          violationIds: fixture.violations.map((v) => v.id),
        }),
        null,
        2
      )
    )
  }

  const { origin, close } = await createStaticServer(join(ROOT, 'out'), 0)
  try {
    const { runs, violationCount, incompleteCount } = await runSuite({
      origin,
      routes: detection.routes,
      map,
      meta,
    })

    const summary = sanitizeArtifact({
      ...meta,
      decision: 'run',
      testsRun: true,
      mergeBlockingVerified: violationCount === 0,
      violationCount,
      incompleteCount,
      routeCount: detection.routes.length,
      runCount: runs.length,
      detection: {
        decision: detection.decision,
        reason: detection.reason,
        unknownPaths: detection.unknownPaths,
        changedPaths: detection.changedPaths,
      },
      incompleteNote:
        incompleteCount > 0
          ? 'Incomplete (inconclusive) axe findings retained for manual review; they do not fail the gate.'
          : undefined,
    })
    writeFileSync(join(ARTIFACT_DIR, 'summary.json'), JSON.stringify(summary, null, 2))

    process.stdout.write(
      `a11y: ${runs.length} scans, ${violationCount} violation rule(s), ${incompleteCount} incomplete rule(s)\n`
    )
    if (violationCount > 0) {
      for (const run of runs) {
        for (const v of run.result.violations) {
          process.stderr.write(
            `VIOLATION ${run.route} [${run.state}/${run.viewport.id}] ${v.id}: ${v.description}\n`
          )
        }
      }
      process.exit(1)
    }
    process.exit(0)
  } finally {
    await close()
  }
}

main().catch((err) => {
  process.stderr.write(`${err?.stack || err}\n`)
  process.exit(1)
})
