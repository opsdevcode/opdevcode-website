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
    ]) {
      const svg = readFileSync(join(root, 'public/brand', name), 'utf8')
      assert.match(svg, /<svg/)
      assert.match(svg, /stroke-linecap="square"/)
    }
  })
})
