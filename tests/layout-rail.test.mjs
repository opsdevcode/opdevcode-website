import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function extractRailSections(src) {
  const sections = []
  const openRe = /<section\b[^>]*>/g
  let match
  while ((match = openRe.exec(src))) {
    if (!/\brail\b/.test(match[0])) continue
    const innerStart = match.index + match[0].length
    let depth = 1
    let i = innerStart
    while (i < src.length && depth > 0) {
      const nextOpen = src.indexOf('<section', i)
      const nextClose = src.indexOf('</section>', i)
      if (nextClose === -1) break
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1
        i = nextOpen + 8
      } else {
        depth -= 1
        if (depth === 0) {
          sections.push(src.slice(innerStart, nextClose))
        }
        i = nextClose + 10
      }
    }
  }
  return sections
}

function countTopLevelTags(inner) {
  let count = 0
  let i = 0
  let depth = 0
  while (i < inner.length) {
    if (inner.startsWith('{', i)) {
      let braces = 1
      i += 1
      while (i < inner.length && braces > 0) {
        if (inner[i] === '{') braces += 1
        else if (inner[i] === '}') braces -= 1
        i += 1
      }
      if (depth === 0) count += 1
      continue
    }
    if (inner.startsWith('</', i)) {
      const end = inner.indexOf('>', i)
      depth -= 1
      i = end === -1 ? inner.length : end + 1
      continue
    }
    if (inner[i] === '<' && inner[i + 1] !== '!' && inner[i + 1] !== '/') {
      const end = inner.indexOf('>', i)
      if (end === -1) break
      const tag = inner.slice(i, end + 1)
      if (depth === 0) count += 1
      if (!tag.endsWith('/>')) depth += 1
      i = end + 1
      continue
    }
    i += 1
  }
  return count
}

describe('homepage rail layout', () => {
  const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
  const css = readFileSync(join(root, 'src/styles/system.css'), 'utf8')

  it('pins non-label rail children to the content column', () => {
    assert.match(css, /\.rail > :not\(\.rail-label\)/)
    assert.match(css, /\.rail > :not\(\.rail-label\) \{\s*grid-column: 2;/)
  })

  it('gives every homepage rail section a label plus one content child', () => {
    const sections = extractRailSections(home)
    assert.ok(sections.length >= 6, `expected several rail sections, got ${sections.length}`)
    for (const inner of sections) {
      const children = countTopLevelTags(inner)
      assert.equal(
        children,
        2,
        `rail section must be [rail-label, content]. got ${children} top-level children:\n${inner.slice(0, 240)}`
      )
    }
  })
})

describe('app page rails', () => {
  it('does not leave extra rail children on other app pages', () => {
    const appDir = join(root, 'src/app')
    const files = []
    function walk(dir) {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name)
        if (entry.isDirectory()) walk(path)
        else if (entry.name === 'page.tsx') files.push(path)
      }
    }
    walk(appDir)
    for (const file of files) {
      const src = readFileSync(file, 'utf8')
      for (const inner of extractRailSections(src)) {
        const children = countTopLevelTags(inner)
        assert.equal(
          children,
          2,
          `${file} rail section must be [rail-label, content]. got ${children}`
        )
      }
    }
  })
})
