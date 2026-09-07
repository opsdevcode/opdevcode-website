import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('governed-section brand system', () => {
  it('defines paper, ink, and four product accents', () => {
    const tokens = readFileSync(join(root, 'src/styles/design-tokens.css'), 'utf8')
    assert.match(tokens, /--color-bg: #f3efe6/)
    assert.match(tokens, /--color-text: #1a1f1c/)
    assert.match(tokens, /--color-repave: #c4841a/)
    assert.match(tokens, /--color-overpass: #1a7a72/)
    assert.match(tokens, /--color-toll: #2b5f9e/)
    assert.match(tokens, /--color-dispatch: #5b4a8a/)
    assert.doesNotMatch(tokens, /#635bff/)
    assert.doesNotMatch(tokens, /Stripe-inspired/)
  })

  it('ships family SVG marks', () => {
    for (const name of [
      'mark-opsdevcode.svg',
      'mark-repave.svg',
      'mark-overpass.svg',
      'mark-toll.svg',
      'mark-dispatch.svg',
      'section-system.svg',
      'lockup-opsdevcode.svg',
      'favicon-opsdevcode.svg',
    ]) {
      const svg = readFileSync(join(root, 'public/brand', name), 'utf8')
      assert.match(svg, /<svg/)
      assert.match(svg, /stroke-linecap="square"/)
    }
  })

  it('uses one company drawing for mark, favicon, lockup, chrome, and share card', () => {
    const corner = 'M6 13 V6 H13'
    const mark = readFileSync(join(root, 'components/BrandMark.tsx'), 'utf8')
    const files = [
      'public/brand/mark-opsdevcode.svg',
      'public/brand/favicon-opsdevcode.svg',
      'public/brand/lockup-opsdevcode.svg',
      'public/brand/og-opsdevcode.svg',
    ]
    for (const file of files) {
      assert.match(readFileSync(join(root, file), 'utf8'), new RegExp(corner))
    }
    assert.match(mark, /M6 13 V6 H13/)
    const og = readFileSync(join(root, 'public/brand/og-opsdevcode.svg'), 'utf8')
    assert.match(og, /OpsDevCode/)
    assert.match(og, /Governed golden paths for platform engineering/)
    assert.doesNotMatch(og, /Infrastructure for modern engineering organizations/)
    assert.doesNotMatch(og, /Repave - delivery/)
  })
})
