import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('central share visual', () => {
  it('derives the OG card from the org-profile banner, not a second layout', () => {
    const script = readFileSync(join(root, 'scripts', 'screenshot-og.js'), 'utf8')
    assert.match(script, /opsdevco-banner\.png/)
    assert.match(script, /og-image\.png/)
    assert.doesNotMatch(script, /og-image\.html/)
    assert.doesNotMatch(script, /Infrastructure for modern engineering/)
    assert.ok(!existsSync(join(root, 'scripts', 'og-image.html')))
  })

  it('keeps short share URLs on the same card', () => {
    const netlify = readFileSync(join(root, 'netlify.toml'), 'utf8')
    assert.match(netlify, /from = "\/preview-v5\.png"/)
    assert.match(netlify, /to = "\/assets\/preview-v5\.png"/)
  })
})
