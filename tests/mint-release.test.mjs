import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('mint release references', () => {
  it('keeps advertised install and lab capture on separate published pins', () => {
    const release = readFileSync(join(root, 'lib/mint-release.ts'), 'utf8')
    const site = readFileSync(join(root, 'lib/site.ts'), 'utf8')
    const lab = readFileSync(join(root, 'lib/mint-lab.ts'), 'utf8')
    const mintPage = readFileSync(join(root, 'src/app/products/mint/page.tsx'), 'utf8')
    assert.match(release, /MINT_GITHUB_TAG = 'v0\.9\.0-alpha\.2'/)
    assert.match(release, /MINT_PYPI_VERSION = '0\.9\.0a2'/)
    assert.match(release, /MINT_LAB_GITHUB_TAG = 'v0\.8\.0-alpha\.2'/)
    assert.match(release, /MINT_LAB_PYPI_VERSION = '0\.8\.0a2'/)
    assert.match(release, /MINT_REGISTRY_TAG = 'v0\.2\.0-alpha\.0'/)
    assert.match(release, /MINT_ACTION_TAG = 'v0\.2\.0-alpha\.0'/)
    assert.match(site, /MINT_ACTION_RELEASE_URL/)
    assert.match(
      site,
      /MINT_RELEASE_URL = `\$\{MINT_LANGUAGE_URL\}\/releases\/tag\/\$\{MINT_GITHUB_TAG\}`/
    )
    assert.match(lab, /MINT_LAB_PYPI_VERSION/)
    assert.match(lab, /MINT_LAB_GITHUB_TAG/)
    assert.doesNotMatch(mintPage, /v0\.7\.0-alpha\.2/)
    assert.match(mintPage, /MINT_LAB_GITHUB_TAG/)
    assert.match(mintPage, /already-cached catalog/)
    assert.doesNotMatch(site, /mint\.opsdevco/)
  })
})
