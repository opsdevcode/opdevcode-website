import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
const css = readFileSync(join(root, 'src/styles/site.css'), 'utf8')

describe('homepage inset from frames and rules', () => {
  it('keeps the five-section parent homepage without SystemMap', () => {
    assert.match(home, /id="home-thesis"/)
    assert.match(home, /id="products"/)
    assert.match(home, /id="why-heading"/)
    assert.match(home, /id="start-heading"/)
    assert.match(home, /id="company-heading"/)
    assert.doesNotMatch(home, /SystemMap/)
  })

  it('gives section copy and cards room from hairlines and borders', () => {
    assert.match(css, /\.wrap\.home > section\.section \{\s*padding-top: var\(--space-80\);/)
    assert.match(css, /\.product-card--portfolio \{\s*[\s\S]*?padding: var\(--space-32\);/)
    assert.match(css, /\.why-list li,\s*\.start-list li \{\s*[\s\S]*?padding: var\(--space-24\) 0;/)
    assert.match(css, /\.start-featured \{\s*[\s\S]*?padding: var\(--space-32\) 0;/)
    assert.match(css, /\.product-card--portfolio \.cta-row \{\s*margin-top: var\(--space-24\);/)
  })
})
