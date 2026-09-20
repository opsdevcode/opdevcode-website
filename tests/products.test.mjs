import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
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

  it('gives every product the same editorial density as Repave', () => {
    const ownsBlocks = [...productsSrc.matchAll(/owns: \[([\s\S]*?)\],/g)]
    assert.equal(ownsBlocks.length, 4)
    for (const block of ownsBlocks) {
      const items = [...block[1].matchAll(/'/g)].length / 2
      assert.ok(items >= 6, `owns list too thin: ${block[1]}`)
    }
    assert.match(productsSrc, /Custody\. Relationships\. Drift\. Impact\. Transactions\./)
    assert.match(productsSrc, /Spend\. Ownership\. Utilization\. Evidence\./)
    assert.match(productsSrc, /Intent\. Proposal\. Gate\. Action\./)
    assert.match(productsSrc, /Generate\. Adopt\. Configure\. Upgrade\. Observe\. Remediate\./)
  })

  it('routes visitor site links to live hosts or company product pages', () => {
    assert.match(siteSrc, /repave: 'https:\/\/repave\.opsdevco\.de'/)
    assert.match(siteSrc, /overpass: 'https:\/\/overpass\.opsdevco\.de'/)
    assert.match(siteSrc, /toll: 'https:\/\/toll\.opsdevco\.de'/)
    assert.match(siteSrc, /dispatch: 'https:\/\/dispatch\.opsdevco\.de'/)
    assert.match(siteSrc, /overpass: true/)
    assert.match(siteSrc, /toll: true/)
    assert.match(siteSrc, /dispatch: true/)
    assert.doesNotMatch(siteSrc, /overpass: false/)
    assert.doesNotMatch(siteSrc, /toll: false/)
    assert.doesNotMatch(siteSrc, /dispatch: false/)
    assert.match(productsSrc, /publicUrl: productSiteHref\('repave'\)/)
    assert.match(productsSrc, /publicUrl: productSiteHref\('overpass'\)/)
    assert.match(productsSrc, /publicUrl: productSiteHref\('toll'\)/)
    assert.match(productsSrc, /publicUrl: productSiteHref\('dispatch'\)/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/overpass/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/toll/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/dispatch/)
    assert.doesNotMatch(productsSrc, /github.com\/opsdevcode\/repave/)
    assert.match(productsSrc, /See the governed lifecycle/)
    assert.match(siteSrc, /REPAVE_PROOF_URL = `\$\{REPAVE_URL\}\/proof`/)
    assert.match(siteSrc, /REPAVE_EVALUATE_URL = `\$\{REPAVE_WAITLIST_URL\}\?intent=evaluate`/)
    assert.match(productsSrc, /ctaHref: REPAVE_EVALUATE_URL/)
    assert.match(productsSrc, /ctaHref: PRODUCT_URLS\.overpass/)
    assert.match(productsSrc, /ctaHref: PRODUCT_URLS\.toll/)
    assert.match(productsSrc, /ctaHref: PRODUCT_URLS\.dispatch/)
    assert.doesNotMatch(productsSrc, /waitlistUrl\('overpass'\)/)
    assert.doesNotMatch(productsSrc, /\/try/)
    assert.doesNotMatch(siteSrc, /\/try/)
  })

  it('does not rewrite product identity hosts onto the company Netlify site', () => {
    assert.doesNotMatch(netlify, /https:\/\/overpass\.opsdevco\.de\/\*/)
    assert.doesNotMatch(netlify, /https:\/\/toll\.opsdevco\.de\/\*/)
    assert.doesNotMatch(netlify, /https:\/\/dispatch\.opsdevco\.de\/\*/)
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
    assert.doesNotMatch(siteSrc, /Governed golden paths for platform engineering/)
    assert.doesNotMatch(siteSrc, /intelligent platform layer/)
    assert.doesNotMatch(siteSrc, /Platform engineering as a service/)
  })

  it('uses the governed-section mark on company chrome, not raster banners', () => {
    const header = readFileSync(join(root, 'components/Header.tsx'), 'utf8')
    const footer = readFileSync(join(root, 'components/Footer.tsx'), 'utf8')
    const layout = readFileSync(join(root, 'src/app/layout.tsx'), 'utf8')
    const seo = readFileSync(join(root, 'lib/seo.ts'), 'utf8')
    assert.match(siteSrc, /COMPANY_MARK_SRC = '\/brand\/mark-opsdevcode\.svg'/)
    assert.match(siteSrc, /COMPANY_LOCKUP_SRC = '\/brand\/lockup-opsdevcode\.svg'/)
    assert.match(siteSrc, /COMPANY_LOGO_SRC = '\/brand\/favicon-opsdevcode\.svg'/)
    assert.match(header, /BrandMark/)
    assert.match(footer, /ProductMark/)
    assert.match(footer, /product\.name/)
    assert.match(footer, /BrandMark/)
    assert.match(layout, /COMPANY_LOGO_SRC/)
    assert.match(layout, /IBM_Plex_Sans/)
    assert.match(siteSrc, /SITE_SHARE_TITLE/)
    assert.match(seo, /SITE_SHARE_TITLE/)
    assert.doesNotMatch(header, /opsdevco-banner/)
    assert.doesNotMatch(footer, /opsdevco-banner/)
    assert.doesNotMatch(header, /opsdevco-logo-o-terminal/)
    assert.doesNotMatch(footer, /opsdevco-logo-o-terminal/)
    assert.doesNotMatch(layout, /opsdevco-logo-o-terminal/)
    assert.equal(existsSync(join(root, 'logo-preview.html')), false)
    for (const retired of [
      'public/assets/opsdevco-logo.png',
      'public/assets/opsdevco-logo-o-mark.png',
      'public/assets/opsdevco-logo-o-terminal.png',
      'public/assets/opsdevco-banner.png',
    ]) {
      assert.equal(existsSync(join(root, retired)), false, retired)
    }
    assert.equal(existsSync(join(root, 'public/brand/github-avatar-opsdevcode.png')), true)
  })

  it('uses a parent-brand homepage, not a fifth product sales page', () => {
    const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
    assert.match(home, /Building software is easier than keeping it healthy/)
    assert.match(home, /Specialized domains/)
    assert.match(home, /Specialization isn&apos;t the problem/)
    assert.match(home, /One engineering system. Specialized domains/)
    assert.match(home, /Independent products. Connected engineering context/)
    assert.match(home, /Explore the system/)
    assert.match(home, /href="\/architecture"/)
    assert.match(home, /Explore the products/)
    assert.match(home, /<div className="hero-grid hero-stage">/)
    assert.match(home, /variant="hero"/)
    assert.match(home, /variant="family"/)
    assert.match(home, /problem-planes/)
    assert.doesNotMatch(home, /product-lines/)
    assert.doesNotMatch(home, /Start Free/)
    assert.doesNotMatch(home, /\/try/)
    assert.doesNotMatch(home, /ConvergePair/)
    assert.doesNotMatch(home, /intelligent platform layer/)
    assert.doesNotMatch(home, /Policy Runtime/)
    assert.doesNotMatch(home, /Open Policy Agent/)
    assert.doesNotMatch(home, /\bRelay\b/)
  })

  it('adds a company architecture page that is not a fifth product', () => {
    const architecture = readFileSync(join(root, 'src/app/architecture/page.tsx'), 'utf8')
    const header = readFileSync(join(root, 'components/Header.tsx'), 'utf8')
    const sitemap = readFileSync(join(root, 'src/app/sitemap.ts'), 'utf8')
    assert.match(architecture, /Decisions are shared. Authority is not/)
    assert.match(architecture, /not a fifth product/)
    assert.match(architecture, /Open Policy Agent/)
    assert.match(header, /\/architecture/)
    assert.match(sitemap, /\/architecture/)
    assert.doesNotMatch(architecture, /fully automated compliance/)
    assert.doesNotMatch(architecture, /production-proven policy control plane/)
  })

  it('does not overclaim Overpass live-cloud, Toll savings, or Dispatch autonomy', () => {
    const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
    const productsPage = readFileSync(join(root, 'src/app/products/page.tsx'), 'utf8')
    assert.doesNotMatch(productsSrc, /blast radius from a proposed or live change/i)
    assert.doesNotMatch(productsSrc, /Commitment coverage as evidence/)
    assert.doesNotMatch(productsSrc, /Waste findings as evidence/)
    assert.match(productsSrc, /No savings percentages/)
    assert.match(productsSrc, /not live-cloud/)
    assert.match(productsSrc, /still execute in Repave/)
    assert.match(productsSrc, /spend\/waste execution still in Repave/)
    assert.match(productsSrc, /does not approve its own work/)
    assert.doesNotMatch(productsSrc, /A single interaction surface across the four jobs/)
    assert.doesNotMatch(productsSrc, /realized savings/)
    assert.doesNotMatch(home, /attributes the spend/)
    assert.doesNotMatch(home, /reads the estate/)
    assert.match(productsPage, /not yet a\s+standalone four-product interaction surface/)
  })

  it('keeps Convergence off the product hierarchy on the homepage', () => {
    const home = readFileSync(join(root, 'src/app/page.tsx'), 'utf8')
    assert.match(home, /not an\s+OpsDevCode product/)
    assert.match(home, /not in the\s+runtime path/)
    assert.doesNotMatch(home, /slug: 'convergence'/)
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
