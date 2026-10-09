import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { sourceSurfaceFromPath, buildEvent } from '../lib/analytics.contract.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

describe('public interactive labs', () => {
  it('publishes /labs and three guided routes', () => {
    assert.equal(existsSync(join(root, 'src/app/labs/page.tsx')), true)
    assert.equal(existsSync(join(root, 'src/app/labs/[slug]/page.tsx')), true)
    const hub = read('src/app/labs/page.tsx')
    const data = read('lib/labs.ts')
    const workbench = read('components/labs/LabWorkbench.tsx')
    assert.match(data, /slug: 'create'/)
    assert.match(data, /slug: 'observe'/)
    assert.match(data, /slug: 'reclaim'/)
    assert.match(hub, /href=\{lab\.href\}/)
    assert.match(workbench, /VERIFICATION_PENDING/)
    assert.match(workbench, /REQUEST_RECLAIM/)
    assert.match(data, /environmentId: 'env-aws-lab-sandbox-01'/)
    assert.match(data, /environmentId: 'env-azure-lab-sandbox-01'/)
    assert.match(data, /environmentId: 'env-gcp-lab-sandbox-01'/)
    assert.match(data, /aws_s3_bucket/)
    assert.match(data, /azurerm_storage_account/)
    assert.match(data, /google_storage_bucket/)
    assert.match(data, /aws_sqs_queue/)
    assert.match(data, /azurerm_servicebus_queue/)
    assert.match(data, /google_pubsub_topic/)
  })

  it('labels simulated data and never claims cloud destroy or live apply', () => {
    const workbench = read('components/labs/LabWorkbench.tsx')
    const hub = read('src/app/labs/page.tsx')
    assert.match(workbench, /SIMULATED_LABEL/)
    assert.match(hub, /SIMULATED_LABEL/)
    assert.match(read('lib/labs.ts'), /Simulated lab data/)
    assert.match(workbench, /did not destroy infrastructure/)
    assert.match(workbench, /does not call AWS, Azure, or GCP/)
    assert.doesNotMatch(workbench, /destroyed your/)
    assert.doesNotMatch(hub, /sign up/)
    assert.doesNotMatch(hub, /href=["']#["']/)
    assert.doesNotMatch(workbench, /href=["']#["']/)
  })

  it('keeps standing CTAs on real routes', () => {
    const ctas = read('components/labs/LabsCtas.tsx')
    assert.match(ctas, /href="\/products"/)
    assert.match(ctas, /REPAVE_EVALUATE_URL/)
    assert.match(ctas, /CALENDLY_URL/)
    assert.match(ctas, /REPAVE_PROOF_URL/)
    assert.doesNotMatch(ctas, /href=["']#/)
    assert.doesNotMatch(ctas, /href=["']["']/)
  })

  it('reuses Umami events without a second tracker', () => {
    assert.equal(sourceSurfaceFromPath('/labs'), 'labs')
    assert.equal(sourceSurfaceFromPath('/labs/create'), 'labs')
    const start = buildEvent('evaluation_start', {
      product: 'company',
      source_surface: 'labs',
      cta: 'evaluate',
    })
    assert.equal(start?.name, 'evaluation_start')
    const proof = buildEvent('proof_view', {
      product: 'company',
      source_surface: 'labs',
      proof_type: 'other',
    })
    assert.equal(proof?.name, 'proof_view')
    const analytics = read('components/labs/LabsAnalytics.tsx')
    assert.match(analytics, /evaluation_start/)
    assert.match(analytics, /proof_view/)
    assert.doesNotMatch(analytics, /script\.js/)
    assert.doesNotMatch(read('src/app/labs/page.tsx'), /analytics\.opsdevco\.de\/script/)
  })

  it('keeps /labs/observe heading levels consecutive after the page title', () => {
    const workbench = read('components/labs/LabWorkbench.tsx')
    const css = read('src/styles/labs.css')
    assert.match(workbench, /<h1 className="page-title">\{lab\.title\}<\/h1>/)
    assert.match(workbench, /<h2>Approved \(Repave\)<\/h2>/)
    assert.match(workbench, /<h2>Observed \(Overpass\)<\/h2>/)
    assert.doesNotMatch(workbench, /<h3>Approved \(Repave\)<\/h3>/)
    assert.doesNotMatch(workbench, /<h3>Observed \(Overpass\)<\/h3>/)
    assert.match(css, /\.lab-compare h2 \{/)
    assert.doesNotMatch(css, /\.lab-compare h3 \{/)
  })

  it('wires nav, sitemap, and architecture to /labs', () => {
    const header = read('components/Header.tsx')
    const footer = read('components/Footer.tsx')
    const sitemap = read('src/app/sitemap.ts')
    const architecture = read('src/app/architecture/page.tsx')
    const home = read('src/app/page.tsx')
    assert.match(header, /href: '\/labs'/)
    assert.match(footer, /href="\/labs"/)
    assert.match(sitemap, /\/labs/)
    assert.match(sitemap, /\/labs\/create/)
    assert.match(architecture, /href="\/labs"/)
    assert.match(home, /href="\/labs"/)
  })
})
