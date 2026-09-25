#!/usr/bin/env node
/**
 * Classify changed files against a11y/ui-impact-map.json.
 *
 * Outcomes:
 * - run: UI-affecting (or unknown → conservative_run)
 * - skip: only non-UI paths → Not applicable message (never silent)
 * - fail_detection: unknownPolicy=fail_detection and an unmatched path appears
 */

import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { matchGlob } from './match-glob.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_MAP = join(ROOT, 'a11y', 'ui-impact-map.json')

export function loadMap(mapPath = DEFAULT_MAP) {
  return JSON.parse(readFileSync(mapPath, 'utf8'))
}

/**
 * @param {string} path
 * @param {object} map
 * @returns {{ ruleId: string, impact: 'marketing' | 'none' } | { impact: 'unknown', ruleId: null }}
 */
export function classifyPath(path, map) {
  const normalized = String(path).replace(/\\/g, '/').replace(/^\.\//, '')
  for (const rule of map.rules) {
    for (const glob of rule.globs) {
      if (matchGlob(normalized, glob)) {
        return { ruleId: rule.id, impact: rule.impact }
      }
    }
  }
  return { ruleId: null, impact: 'unknown' }
}

/**
 * Parse `git diff --name-status` lines, including renames/copies.
 * @returns {{ status: string, paths: string[] }[]}
 */
export function parseNameStatus(diffText) {
  const entries = []
  for (const line of String(diffText).split('\n')) {
    if (!line.trim()) continue
    const parts = line.split('\t')
    const status = parts[0]
    if (!status) continue
    if ((status.startsWith('R') || status.startsWith('C')) && parts.length >= 3) {
      entries.push({ status, paths: [parts[1], parts[2]] })
    } else if (parts.length >= 2) {
      entries.push({ status, paths: [parts[1]] })
    }
  }
  return entries
}

export function collectChangedPaths(entries) {
  const paths = new Set()
  for (const entry of entries) {
    for (const p of entry.paths) {
      if (p) paths.add(p.replace(/\\/g, '/'))
    }
  }
  return [...paths].sort()
}

/**
 * @returns {{
 *   decision: 'run' | 'skip' | 'fail_detection',
 *   reason: string,
 *   notApplicableMessage?: string,
 *   impacts: string[],
 *   unknownPaths: string[],
 *   matched: object[],
 *   routes: { path: string, states: string[] }[],
 *   changedPaths: string[],
 * }}
 */
export function detectImpact({ changedPaths, map }) {
  const matched = []
  const impacts = new Set()
  const unknownPaths = []
  const routeKey = new Map()

  for (const filePath of changedPaths) {
    const classification = classifyPath(filePath, map)
    if (classification.impact === 'unknown') {
      unknownPaths.push(filePath)
      impacts.add('unknown')
      matched.push({ path: filePath, ...classification })
      continue
    }
    impacts.add(classification.impact)
    matched.push({ path: filePath, ...classification })
    if (classification.impact === 'marketing') {
      const rule = map.rules.find((r) => r.id === classification.ruleId)
      for (const route of rule?.routes || []) {
        const key = route.path
        const existing = routeKey.get(key) || new Set()
        for (const state of route.states || ['default']) existing.add(state)
        routeKey.set(key, existing)
      }
    }
  }

  const impactList = [...impacts]
  const routes = [...routeKey.entries()]
    .map(([path, states]) => ({ path, states: [...states].sort() }))
    .sort((a, b) => a.path.localeCompare(b.path))

  if (unknownPaths.length > 0) {
    const policy = map.unknownPolicy || 'conservative_run'
    if (policy === 'fail_detection') {
      return {
        decision: 'fail_detection',
        reason: `Unknown UI impact for: ${unknownPaths.join(', ')}`,
        impacts: impactList,
        unknownPaths,
        matched,
        routes,
        changedPaths,
      }
    }
    // conservative_run: never silent skip
    const fallback = map.rules.find((r) => r.impact === 'marketing' && r.routes?.length)
    if (routes.length === 0 && fallback?.routes) {
      for (const route of fallback.routes) {
        routeKey.set(route.path, new Set(route.states || ['default']))
      }
    }
    const conservativeRoutes =
      routes.length > 0
        ? routes
        : [...routeKey.entries()].map(([path, states]) => ({
            path,
            states: [...states].sort(),
          }))
    return {
      decision: 'run',
      reason: `Unknown impact paths present; conservative_run (${unknownPaths.length} unknown)`,
      impacts: impactList,
      unknownPaths,
      matched,
      routes: conservativeRoutes,
      changedPaths,
    }
  }

  if (impacts.has('marketing')) {
    return {
      decision: 'run',
      reason: 'UI-affecting marketing paths changed',
      impacts: impactList,
      unknownPaths,
      matched,
      routes,
      changedPaths,
    }
  }

  return {
    decision: 'skip',
    reason: map.notApplicableMessage || 'Not applicable — no UI-affecting changes',
    notApplicableMessage: map.notApplicableMessage || 'Not applicable — no UI-affecting changes',
    impacts: impactList,
    unknownPaths,
    matched,
    routes: [],
    changedPaths,
  }
}

export function gitChangedFiles({ baseRef, headRef = 'HEAD', cwd = ROOT } = {}) {
  if (!baseRef) {
    throw new Error('baseRef is required (e.g. origin/main or a SHA)')
  }
  const range = `${baseRef}...${headRef}`
  const diffText = execFileSync('git', ['diff', '--name-status', '--find-renames', range], {
    cwd,
    encoding: 'utf8',
  })
  const entries = parseNameStatus(diffText)
  return collectChangedPaths(entries)
}

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`)
}

function main(argv = process.argv.slice(2)) {
  const args = {
    base: process.env.A11Y_BASE_REF || '',
    head: process.env.A11Y_HEAD_REF || 'HEAD',
    map: DEFAULT_MAP,
    files: null,
    force: process.env.A11Y_FORCE_RUN === '1',
  }

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i]
    if (a === '--base') args.base = argv[++i]
    else if (a === '--head') args.head = argv[++i]
    else if (a === '--map') args.map = argv[++i]
    else if (a === '--files') args.files = argv[++i]
    else if (a === '--force') args.force = true
    else if (a === '--help' || a === '-h') {
      process.stdout.write(
        `Usage: node a11y/detect-ui-impact.mjs [--base REF] [--head REF] [--files list.txt] [--force]\n`
      )
      process.exit(0)
    }
  }

  const map = loadMap(args.map)
  let changedPaths
  if (args.files) {
    changedPaths = readFileSync(args.files, 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
  } else if (args.force) {
    changedPaths = ['src/app/page.tsx']
  } else {
    if (!args.base) {
      process.stderr.write('Missing --base or A11Y_BASE_REF\n')
      process.exit(2)
    }
    changedPaths = gitChangedFiles({ baseRef: args.base, headRef: args.head })
  }

  const result = detectImpact({ changedPaths, map })
  printJson(result)
  if (result.decision === 'fail_detection') process.exit(3)
  if (result.decision === 'skip') process.exit(0)
  process.exit(0)
}

const invokedDirectly =
  Boolean(process.argv[1]) && import.meta.url === pathToFileURL(process.argv[1]).href

if (invokedDirectly) {
  main()
}
