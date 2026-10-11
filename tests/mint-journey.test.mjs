import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

describe('mint sales and adoption journey', () => {
  it('publishes dedicated audience and get-started routes', () => {
    for (const rel of [
      'src/app/products/mint/page.tsx',
      'src/app/products/mint/platform-teams/page.tsx',
      'src/app/products/mint/developers/page.tsx',
      'src/app/products/mint/integration-authors/page.tsx',
      'src/app/products/mint/get-started/page.tsx',
    ]) {
      assert.equal(existsSync(join(root, rel)), true, rel)
    }
    assert.equal(existsSync(join(root, 'src/app/products/mint/integrations/page.tsx')), false)
    const hub = read('src/app/products/mint/page.tsx')
    const journey = read('lib/mint-journey.ts')
    const sitemap = read('src/app/sitemap.ts')
    assert.match(hub, /MINT_GET_STARTED_HREF/)
    assert.match(hub, /Choose a path/)
    assert.match(hub, /MINT_AUDIENCES/)
    assert.match(journey, /Platform leaders/)
    assert.match(journey, /Application teams/)
    assert.match(sitemap, /\/products\/mint\/platform-teams/)
    assert.match(sitemap, /\/products\/mint\/developers/)
    assert.match(sitemap, /\/products\/mint\/integration-authors/)
    assert.match(sitemap, /\/products\/mint\/get-started/)
    assert.doesNotMatch(sitemap, /\/products\/mint\/integrations/)
  })

  it('keeps get-started honest about apply, providers, and capture provenance', () => {
    const start = read('src/app/products/mint/get-started/page.tsx')
    const authors = read('src/app/products/mint/integration-authors/page.tsx')
    const release = read('lib/mint-release.ts')
    assert.match(start, /pipx install specmint/)
    assert.match(start, /mint version/)
    assert.match(start, /mint apply/)
    assert.match(start, /Not production-ready/)
    assert.match(start, /MINT_ACTION_TAG/)
    assert.match(start, /MINT_LAB_PYPI_VERSION/)
    assert.match(release, /MINT_ACTION_TAG = 'v0\.2\.0-alpha\.0'/)
    assert.match(release, /MINT_LAB_PYPI_VERSION = '0\.8\.0a2'/)
    assert.match(authors, /No live AWS, Azure, GCP/)
    assert.match(authors, /does not recreate/)
    assert.match(start, /MINT_SITE_URL/)
    assert.match(start, /mint\.opsdevco\.de quickstart/)
  })
})
