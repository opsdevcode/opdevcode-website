import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const page = readFileSync(join(root, 'src/app/repave/page.tsx'), 'utf8')
const header = readFileSync(join(root, 'components/RepaveSalesHeader.tsx'), 'utf8')
const figure = readFileSync(join(root, 'components/RepaveLifecycleFigure.tsx'), 'utf8')
const css = readFileSync(join(root, 'src/styles/repave-sales.css'), 'utf8')
const companyHeader = readFileSync(join(root, 'components/Header.tsx'), 'utf8')
const sitemap = readFileSync(join(root, 'src/app/sitemap.ts'), 'utf8')

describe('Repave sales first screen', () => {
  it('uses exact hero copy and the lifecycle model', () => {
    assert.match(page, /REPAVE · GOVERNED SOFTWARE STATE/)
    assert.match(page, /Keep repositories aligned/)
    assert.match(page, /with the way they were meant/)
    assert.match(page, /to operate\./)
    assert.match(
      page,
      /Repave understands the approved state of a repository, observes what exists now/
    )
    assert.match(page, /Get access →/)
    assert.match(page, /See how Repave works ↓/)
    assert.match(page, /Governed delivery doesn&apos;t end when the repository is created/)
    assert.match(page, /THE LIFECYCLE PROBLEM/)
    assert.match(page, /Repository creation is the beginning/)
    assert.match(page, /not the lifecycle\./)
    assert.match(figure, /APPROVED STATE/)
    assert.match(figure, /ACTUAL STATE/)
    assert.match(figure, /DIFFERENCE/)
    assert.match(figure, /APPROVED != ACTUAL/)
    assert.match(figure, /SUPPORTED PATH/)
    assert.match(figure, /GOVERNED CHANGE/)
    assert.match(figure, /VERIFIED STATE/)
    assert.match(figure, /HISTORY \+ EVIDENCE/)
    assert.match(figure, /observed lifecycle continues/)
    assert.match(figure, /Repave compares approved repository state with actual repository state/)
  })

  it('does not lead with portal, Backstage, AI, or platform-engineering framing', () => {
    for (const src of [page, header, figure]) {
      assert.doesNotMatch(src, /ultimate developer portal/i)
      assert.doesNotMatch(src, /Backstage replacement/i)
      assert.doesNotMatch(src, /AI-powered DevOps/i)
      assert.doesNotMatch(src, /Single pane of glass/i)
      assert.doesNotMatch(src, /Platform engineering made easy/i)
      assert.doesNotMatch(src, /Automate everything/i)
      assert.doesNotMatch(src, /Self-service infrastructure/i)
      assert.doesNotMatch(src, /engineering control plane/i)
      assert.doesNotMatch(src, /intelligent platform layer/i)
    }
  })

  it('uses the canonical Repave mark and family Menu, not a new mobile system', () => {
    assert.match(header, /slug="repave"/)
    assert.match(header, /ProductMark/)
    assert.match(header, /by/)
    assert.match(header, /OpsDevCode/)
    assert.match(header, /\{open \? 'Close' : 'Menu'\}/)
    assert.match(header, /aria-controls="site-nav"/)
    assert.match(header, /Get access →/)
    assert.match(header, /How it works/)
    assert.doesNotMatch(header, /isometric/)
    assert.match(css, /header-wrap--repave/)
    assert.match(css, /min-height: 72px/)
    assert.match(css, /@media \(max-width: 768px\)/)
    assert.match(css, /repave-figure-svg--mobile/)
    assert.match(css, /prefers-reduced-motion/)
    assert.match(sitemap, /\/repave/)
  })

  it('leaves company header chrome unchanged', () => {
    assert.match(companyHeader, /BrandMark/)
    assert.match(companyHeader, /OpsDevCode home/)
    assert.match(companyHeader, /\{open \? 'Close' : 'Menu'\}/)
    assert.doesNotMatch(companyHeader, /RepaveSalesHeader/)
    assert.doesNotMatch(companyHeader, /Get access/)
  })
})
