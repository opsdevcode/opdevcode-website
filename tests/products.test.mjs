import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const productsSrc = readFileSync(join(root, 'lib/products.ts'), 'utf8')
const siteSrc = readFileSync(join(root, 'lib/site.ts'), 'utf8')

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
    assert.match(productsSrc, /maturity: 'available'/)
    assert.match(productsSrc, /maturity: 'in-development'/)
    assert.match(productsSrc, /maturity: 'emerging'/)
  })

  it('hands Repave to repave.dev and siblings to GitHub identity repos', () => {
    assert.match(productsSrc, /ctaHref: 'https:\/\/repave\.dev'/)
    assert.match(productsSrc, /opsdevcode\/overpass/)
    assert.match(productsSrc, /opsdevcode\/toll/)
    assert.match(productsSrc, /opsdevcode\/dispatch/)
  })

  it('keeps the company thesis architectural', () => {
    assert.match(siteSrc, /Infrastructure for modern engineering organizations/)
  })
})
