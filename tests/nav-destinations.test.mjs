import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

describe('navigation destinations', () => {
  it('sends the home product CTA to /products, not a same-page hash', () => {
    const home = read('src/app/page.tsx')
    assert.match(home, /<Link className="btn primary" href="\/products">/)
    assert.match(home, /See the products →/)
    assert.doesNotMatch(home, /href="#products"/)
    assert.match(home, /id="products"/)
  })

  it('keeps primary nav on real company routes and Talk on Calendly', () => {
    const header = read('components/Header.tsx')
    assert.match(header, /href: '\/products'/)
    assert.match(header, /href: '\/approach'/)
    assert.match(header, /href: '\/architecture'/)
    assert.match(header, /href: '\/about'/)
    assert.match(header, /href: CALENDLY_URL/)
    assert.doesNotMatch(header, /href: '#/)
    assert.match(header, /href="#main"/)
  })

  it('does not use topic hashes as product, architecture, pricing, or contact destinations', () => {
    const surfaces = [
      'src/app/page.tsx',
      'src/app/products/page.tsx',
      'src/app/architecture/page.tsx',
      'src/app/approach/page.tsx',
      'src/app/about/page.tsx',
      'src/app/services/page.tsx',
      'components/Header.tsx',
      'components/Footer.tsx',
      'components/ProductCard.tsx',
    ]
    const forbidden = /href=["']#(products|architecture|approach|pricing|contact|platform)["']/
    for (const rel of surfaces) {
      assert.doesNotMatch(read(rel), forbidden, rel)
      assert.doesNotMatch(read(rel), /href=["']#["']/, rel)
      assert.doesNotMatch(read(rel), /href=["']["']/, rel)
    }
  })

  it('keeps labeled in-page anchors on the Repave sales page only', () => {
    const header = read('components/RepaveSalesHeader.tsx')
    const page = read('src/app/repave/page.tsx')
    assert.match(header, /href: '#product', label: 'Product'/)
    assert.match(header, /href: '#how-it-works', label: 'How it works'/)
    assert.match(page, /href="#how-it-works"/)
    assert.match(page, /See how Repave works ↓/)
  })
})
