import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { matchGlob } from '../a11y/match-glob.mjs'
import {
  classifyPath,
  collectChangedPaths,
  detectImpact,
  loadMap,
  parseNameStatus,
} from '../a11y/detect-ui-impact.mjs'
import { sanitizeString } from '../a11y/sanitize.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const map = loadMap(join(root, 'a11y', 'ui-impact-map.json'))

describe('a11y ui-impact map', () => {
  it('is valid JSON with marketing routes and unknownPolicy', () => {
    assert.equal(map.surface, 'marketing')
    assert.equal(map.unknownPolicy, 'conservative_run')
    assert.match(map.notApplicableMessage, /Not applicable/)
    assert.ok(map.rules.some((r) => r.impact === 'marketing'))
    assert.ok(map.rules.some((r) => r.impact === 'none'))
    assert.deepEqual(map.axe.tags, [
      'wcag2a',
      'wcag2aa',
      'wcag21a',
      'wcag21aa',
      'wcag22a',
      'wcag22aa',
    ])
  })

  it('matches marketing and non-ui globs', () => {
    assert.equal(matchGlob('src/app/page.tsx', 'src/**'), true)
    assert.equal(matchGlob('components/Header.tsx', 'components/**'), true)
    assert.equal(matchGlob('docs/brand.md', 'docs/**'), true)
    assert.equal(matchGlob('scripts/setup-domain.sh', 'scripts/**'), true)
    assert.equal(matchGlob('.github/workflows/quality.yml', '.github/workflows/**'), true)
    assert.equal(matchGlob('README.md', 'README.md'), true)
  })
})

describe('a11y change detector', () => {
  it('runs marketing suite for marketing-only changes', () => {
    const result = detectImpact({
      map,
      changedPaths: ['src/app/page.tsx', 'components/Header.tsx'],
    })
    assert.equal(result.decision, 'run')
    assert.ok(result.routes.some((r) => r.path === '/'))
    assert.ok(result.routes.find((r) => r.path === '/')?.states.includes('menu-open'))
    assert.deepEqual(result.unknownPaths, [])
  })

  it('skips browsers for backend-only / non-UI docs with stable message', () => {
    const result = detectImpact({
      map,
      changedPaths: [
        'docs/brand.md',
        'README.md',
        '.github/scripts/check-version.sh',
        'scripts/godaddy-dns.sh',
        'CHANGELOG.md',
      ],
    })
    assert.equal(result.decision, 'skip')
    assert.equal(result.notApplicableMessage, 'Not applicable — no UI-affecting changes')
    assert.deepEqual(result.routes, [])
  })

  it('treats renamed and deleted UI paths as marketing impact', () => {
    const diff = [
      'R100\tcomponents/OldHeader.tsx\tcomponents/Header.tsx',
      'D\tsrc/styles/site.css',
      'A\tlib/products.ts',
    ].join('\n')
    const entries = parseNameStatus(diff)
    const paths = collectChangedPaths(entries)
    assert.ok(paths.includes('components/OldHeader.tsx'))
    assert.ok(paths.includes('components/Header.tsx'))
    assert.ok(paths.includes('src/styles/site.css'))
    const result = detectImpact({ map, changedPaths: paths })
    assert.equal(result.decision, 'run')
  })

  it('treats workflow changes as marketing (never silent skip)', () => {
    const result = detectImpact({
      map,
      changedPaths: ['.github/workflows/quality.yml'],
    })
    assert.equal(result.decision, 'run')
    assert.ok(result.routes.length > 0)
  })

  it('conservative_run on unknown impact (never silent skip)', () => {
    const result = detectImpact({
      map,
      changedPaths: ['totally-unknown/path.bin'],
    })
    assert.equal(result.decision, 'run')
    assert.ok(result.unknownPaths.includes('totally-unknown/path.bin'))
    assert.ok(result.routes.length > 0)
  })

  it('fail_detection when policy requests it', () => {
    const strictMap = {
      ...map,
      unknownPolicy: 'fail_detection',
    }
    const result = detectImpact({
      map: strictMap,
      changedPaths: ['mystery.dat'],
    })
    assert.equal(result.decision, 'fail_detection')
  })

  it('classifies mixed docs+UI as run', () => {
    const result = detectImpact({
      map,
      changedPaths: ['docs/logo.md', 'src/app/about/page.tsx'],
    })
    assert.equal(result.decision, 'run')
  })

  it('classifyPath covers map ids', () => {
    assert.equal(classifyPath('a11y/run.mjs', map).impact, 'marketing')
    assert.equal(classifyPath('docs/CLI-SETUP.md', map).impact, 'none')
    assert.equal(classifyPath('nope.xyz', map).impact, 'unknown')
  })
})

describe('a11y sanitize', () => {
  it('redacts secrets and absolute paths', () => {
    const s = sanitizeString('token=abc123 /home/ubuntu/secret/file')
    assert.match(s, /\[REDACTED\]/)
    assert.match(s, /\[PATH\]/)
    assert.doesNotMatch(s, /abc123/)
    assert.doesNotMatch(s, /\/home\/ubuntu/)
  })
})

describe('a11y fixture file', () => {
  it('ships a deliberate inaccessible HTML fixture', () => {
    const html = readFileSync(join(root, 'a11y/fixtures/inaccessible.html'), 'utf8')
    assert.match(html, /<img /)
    assert.doesNotMatch(html, /alt=/)
    assert.match(html, /<button type="button"><\/button>/)
  })
})
