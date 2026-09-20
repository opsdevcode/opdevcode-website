import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
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

  it('exports a copyable tokens snippet that matches CSS SoT hexes', () => {
    const snippet = JSON.parse(readFileSync(join(root, 'docs/tokens.json'), 'utf8'))
    const tokens = readFileSync(join(root, 'src/styles/design-tokens.css'), 'utf8')
    assert.equal(snippet.paper.toLowerCase(), '#f3efe6')
    assert.equal(snippet.ink.toLowerCase(), '#1a1f1c')
    assert.equal(snippet.rules.toLowerCase(), '#c9c2b3')
    assert.equal(snippet.accentsOnPaper.repave.toLowerCase(), '#c4841a')
    assert.equal(snippet.accentsOnPaper.overpass.toLowerCase(), '#1a7a72')
    assert.equal(snippet.accentsOnPaper.toll.toLowerCase(), '#2b5f9e')
    assert.equal(snippet.accentsOnPaper.dispatch.toLowerCase(), '#5b4a8a')
    assert.equal(snippet.hosts.repave, 'https://repave.opsdevco.de')
    assert.equal(snippet.hosts.overpass, 'https://overpass.opsdevco.de')
    assert.equal(snippet.hosts.toll, 'https://toll.opsdevco.de')
    assert.equal(snippet.hosts.dispatch, 'https://dispatch.opsdevco.de')
    assert.match(tokens, /docs\/tokens\.json/)
    assert.doesNotMatch(tokens, /opsdevcode\/\.github/)
  })

  it('uses paper sticky header, not white glass', () => {
    const css = readFileSync(join(root, 'src/styles/site.css'), 'utf8')
    assert.match(css, /\.header-wrap \{[\s\S]*?background: var\(--surface-glass\)/)
    assert.doesNotMatch(css, /rgba\(255,\s*255,\s*255/)
    assert.match(css, /--surface-glass/)
  })

  it('keeps referenced SEO and mark assets on disk', () => {
    for (const name of [
      'og-opsdevcode.svg',
      'favicon-opsdevcode.svg',
      'github-avatar-opsdevcode.png',
      'mark-opsdevcode.svg',
      'lockup-opsdevcode.svg',
    ]) {
      assert.equal(existsSync(join(root, 'public/brand', name)), true, name)
    }
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
    const accents = {
      'mark-repave.svg': '#C4841A',
      'mark-overpass.svg': '#1A7A72',
      'mark-toll.svg': '#2B5F9E',
      'mark-dispatch.svg': '#5B4A8A',
    }
    for (const [name, accent] of Object.entries(accents)) {
      assert.match(readFileSync(join(root, 'public/brand', name), 'utf8'), new RegExp(accent))
    }
  })

  it('renders product chrome from official mark files', () => {
    const mark = readFileSync(join(root, 'components/BrandMark.tsx'), 'utf8')
    const site = readFileSync(join(root, 'lib/site.ts'), 'utf8')
    const footer = readFileSync(join(root, 'components/Footer.tsx'), 'utf8')
    const productsPage = readFileSync(join(root, 'src/app/products/page.tsx'), 'utf8')
    assert.match(site, /repave: '\/brand\/mark-repave\.svg'/)
    assert.match(site, /overpass: '\/brand\/mark-overpass\.svg'/)
    assert.match(site, /toll: '\/brand\/mark-toll\.svg'/)
    assert.match(site, /dispatch: '\/brand\/mark-dispatch\.svg'/)
    assert.match(mark, /PRODUCT_MARK_SRC/)
    assert.doesNotMatch(mark, /productPaths/)
    assert.match(footer, /ProductMark/)
    assert.match(productsPage, /ProductMark/)
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
    assert.match(og, /Infrastructure for modern engineering organizations/)
    assert.doesNotMatch(og, /Governed golden paths for platform engineering/)
    assert.doesNotMatch(og, /Repave - delivery/)
  })
})
