import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
const css = readFileSync(join(root, 'src/styles/site.css'), 'utf8')
const system = readFileSync(join(root, 'src/styles/system.css'), 'utf8')
const frame = readFileSync(join(root, 'components/PageFrame.tsx'), 'utf8')
const brand = readFileSync(join(root, 'docs/brand.md'), 'utf8')

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
    assert.match(css, /\.wrap\.home > section\.section \{\s*padding-top: var\(--space-96\);/)
    assert.match(css, /\.product-card--portfolio \{\s*[\s\S]*?padding: var\(--space-32\);/)
    assert.match(
      css,
      /\.why-list li \+ li,\s*\.start-list li \+ li \{\s*[\s\S]*?padding-top: var\(--space-24\);/
    )
    assert.match(css, /\.start-featured \{\s*[\s\S]*?padding: var\(--space-40\);/)
    assert.match(css, /\.product-card--portfolio \.cta-row \{\s*margin-top: var\(--space-24\);/)
  })

  it('keeps homepage type off column rules, title ornaments, and the aperture bed', () => {
    assert.match(system, /\.wrap\.home \{\s*[\s\S]*?background-image: none;/)
    assert.doesNotMatch(system, /\.wrap\.home \{[^}]*background-image: linear-gradient/)
    assert.match(css, /\.wrap\.home h2\.section-title \{\s*display: block;/)
    assert.match(css, /\.wrap\.home h2\.section-title::before,/)
    assert.match(css, /content: none;/)
    assert.match(
      css,
      /\.home-support,\s*\.home-measure,\s*\.wrap\.home \.lede \{\s*[\s\S]*?word-spacing: 0\.04em;/
    )
    assert.match(home, /home-hero-identity/)
    assert.match(home, /home-hero-copy/)
    assert.match(css, /\.home-hero-copy \{\s*[\s\S]*?z-index: 1;/)
    assert.match(css, /\.home-hero-identity \{\s*[\s\S]*?pointer-events: none;/)
  })
})

describe('company parent visual distinction', () => {
  it('uses a documented parent-only elevated sheet', () => {
    assert.match(frame, /site-shell--parent/)
    assert.match(css, /\.site-shell--parent \{\s*[\s\S]*?background: var\(--color-bg-elevated\);/)
    assert.match(brand, /Parent-only sheet/)
    assert.match(brand, /#F7F4ED/)
    assert.match(brand, /must not\nsit on, cross, or clip type/)
  })

  it('keeps portfolio accents on product wells, not company chrome', () => {
    assert.match(css, /\.product-card--portfolio \{\s*[\s\S]*?background: var\(--color-bg\);/)
    assert.match(system, /\.wrap\.home \.product-card--portfolio\.product-card--repave/)
    assert.doesNotMatch(css, /\.home-hero \.btn\.primary/)
    assert.match(css, /\.home-hero \.btn \{\s*[\s\S]*?box-shadow: none;/)
  })
})
