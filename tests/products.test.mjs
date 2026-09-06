import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const productsSrc = readFileSync(join(root, 'lib/products.ts'), 'utf8')
const siteSrc = readFileSync(join(root, 'lib/site.ts'), 'utf8')
const netlify = readFileSync(join(root, 'netlify.toml'), 'utf8')

describe('product portfolio', () => {
  it('exposes four named products with distinct domains', () => {
    for (const slug of ['repave', 'overpass', 'toll', 'dispatch']) {
      assert.match(productsSrc, new RegExp(`slug: '${slug}'`))
    }
    assert.match(productsSrc, /Governed software delivery/)
    assert.match(productsSrc, /Infrastructure state and understanding/)
    assert.match(productsSrc, /Engineering economics/)
    assert.match(productsSrc, /Governed intelligent experience/)
  })

  it('does not treat Repave as the umbrella or Dispatch as a data domain', () => {
    assert.match(productsSrc, /not the OpsDevCode umbrella/)
    assert.match(productsSrc, /not a fourth data domain/)
    assert.match(productsSrc, /maturity: 'early-access'/)
    assert.match(productsSrc, /maturity: 'in-development'/)
    assert.match(productsSrc, /maturity: 'emerging'/)
    assert.match(productsSrc, /compareRole: 'Govern delivery'/)
    assert.match(productsSrc, /compareRole: 'Ask and act'/)
  })

  it('routes public CTAs to product subdomains, not private GitHub', () => {
    assert.match(siteSrc, /repave: 'https:\/\/repave\.opsdevco\.de'/)
    assert.match(siteSrc, /overpass: 'https:\/\/overpass\.opsdevco\.de'/)
    assert.match(siteSrc, /toll: 'https:\/\/toll\.opsdevco\.de'/)
    assert.match(siteSrc, /dispatch: 'https:\/\/dispatch\.opsdevco\.de'/)
    assert.match(productsSrc, /publicUrl: PRODUCT_URLS\.repave/)
    assert.match(productsSrc, /publicUrl: PRODUCT_URLS\.overpass/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/overpass/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/toll/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/dispatch/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/repave/)
  })

  it('rewrites product identity hosts on the company Netlify site', () => {
    assert.match(netlify, /https:\/\/overpass\.opsdevco\.de\/\*/)
    assert.match(netlify, /https:\/\/toll\.opsdevco\.de\/\*/)
    assert.match(netlify, /https:\/\/dispatch\.opsdevco\.de\/\*/)
    assert.match(netlify, /to = "\/products\/overpass"/)
  })

  it('does not treat Convergence as a product host', () => {
    assert.doesNotMatch(siteSrc, /convergence\.opsdevco/)
    assert.doesNotMatch(netlify, /convergence\.opsdevco/)
  })

  it('builds robots sitemap from SITE_URL', () => {
    const robots = readFileSync(join(root, 'src/app/robots.ts'), 'utf8')
    assert.match(robots, /sitemap: `\$\{SITE_URL\}\/sitemap\.xml`/)
  })

  it('keeps the company thesis architectural', () => {
    assert.match(siteSrc, /Infrastructure for modern engineering organizations/)
    assert.doesNotMatch(siteSrc, /intelligent platform layer/)
    assert.doesNotMatch(siteSrc, /Platform engineering as a service/)
  })

  it('uses buyer-facing homepage copy, not internal architecture jargon', () => {
    const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
    assert.match(home, /Repave<\/strong> governs software delivery/)
    assert.match(home, /Dispatch<\/strong> provides the governed experience/)
    assert.doesNotMatch(home, /sibling domains/)
    assert.doesNotMatch(home, /fourth store/)
    assert.doesNotMatch(home, /domain authority/)
  })
})

describe('services and a11y basics', () => {
  it('keeps indexed service slugs and company voice', () => {
    const services = readFileSync(join(root, 'lib/services-detail.ts'), 'utf8')
    for (const slug of [
      'platform-health',
      'finops',
      'iac',
      'cicd',
      'kubernetes',
      'custom-tooling',
      'architecture-review',
      'fractional-advisor',
    ]) {
      assert.match(services, new RegExp(`slug: '${slug}'`))
    }
    assert.match(services, /Toll is the engineering economics product/)
    assert.doesNotMatch(services, /I focus/)
    assert.doesNotMatch(services, /I ship/)
    assert.doesNotMatch(services, /what I would do/)
    assert.doesNotMatch(services, /without a full-time hire/)
  })

  it('hides the skip link until keyboard focus', () => {
    const css = readFileSync(join(root, 'src/styles/site.css'), 'utf8')
    assert.match(css, /\.skip-link:focus-visible/)
    assert.match(css, /clip-path: inset\(50%\)/)
  })
})
