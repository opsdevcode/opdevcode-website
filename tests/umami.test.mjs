import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const source = readFileSync(join(root, 'lib/umami.ts'), 'utf8')

function extractArray(name) {
  const match = source.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const`))
  assert.ok(match, `missing ${name}`)
  return [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
}

const CANONICAL_HOSTS = extractArray('CANONICAL_HOSTS')
const EVENTS = extractArray('EVENTS')
const PRODUCTS = extractArray('PRODUCTS')
const CTAS = extractArray('CTAS')
const PROOF_TYPES = extractArray('PROOF_TYPES')
const PROP_KEYS = extractArray('PROP_KEYS')

const ENUMS = {
  product: PRODUCTS,
  source_surface: PRODUCTS,
  destination_product: PRODUCTS,
  cta: CTAS,
  proof_type: PROOF_TYPES,
}

function normalizeHost(host) {
  return (host || '').split(':')[0].trim().toLowerCase()
}

function shouldLoadUmami(host, websiteId) {
  const id = (websiteId || '').trim()
  if (!id) return false
  const hostname = normalizeHost(host)
  if (!hostname || hostname === 'analytics.opsdevco.de') return false
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1') return false
  if (hostname.endsWith('.netlify.app') || hostname.endsWith('.netlify.com')) return false
  if (hostname.includes('localhost')) return false
  return CANONICAL_HOSTS.includes(hostname)
}

function sanitizePayload(event, props) {
  if (!EVENTS.includes(event)) return null
  const out = {}
  if (props && typeof props === 'object') {
    for (const key of PROP_KEYS) {
      const value = props[key]
      if (typeof value === 'string' && ENUMS[key].includes(value)) out[key] = value
    }
  }
  return { event, props: out }
}

describe('umami guards', () => {
  it('loads only on canonical public hosts with a website id', () => {
    assert.equal(shouldLoadUmami('opsdevco.de', 'wid-1'), true)
    assert.equal(shouldLoadUmami('www.opsdevco.de', 'wid-1'), true)
    assert.equal(shouldLoadUmami('repave.opsdevco.de', 'wid-1'), true)
  })

  it('does not emit on localhost, Netlify previews, collector, or arbitrary subdomains', () => {
    assert.equal(shouldLoadUmami('localhost', 'wid-1'), false)
    assert.equal(shouldLoadUmami('127.0.0.1', 'wid-1'), false)
    assert.equal(
      shouldLoadUmami('deploy-preview-116--zingy-lamington-a3286a.netlify.app', 'wid-1'),
      false,
    )
    assert.equal(shouldLoadUmami('analytics.opsdevco.de', 'wid-1'), false)
    assert.equal(shouldLoadUmami('preview.opsdevco.de', 'wid-1'), false)
    assert.equal(shouldLoadUmami('opsdevco.de', ''), false)
    assert.equal(shouldLoadUmami('opsdevco.de', '   '), false)
  })
})

describe('umami payload safety', () => {
  it('keeps only allowed events and enum properties', () => {
    assert.deepEqual(
      sanitizePayload('evaluation_cta', {
        product: 'repave',
        source_surface: 'company',
        cta: 'evaluate',
        destination_product: 'repave',
        email: 'founder@example.com',
        repo: 'secret/repo',
        proof_type: 'not-a-type',
      }),
      {
        event: 'evaluation_cta',
        props: {
          product: 'repave',
          source_surface: 'company',
          cta: 'evaluate',
          destination_product: 'repave',
        },
      },
    )
  })

  it('drops unknown events', () => {
    assert.equal(sanitizePayload('identify', { product: 'repave' }), null)
  })
})

describe('umami wiring', () => {
  it('loads the helper from the company layout and keeps preview builds unconfigured', () => {
    const layout = readFileSync(join(root, 'src/app/layout.tsx'), 'utf8')
    const env = readFileSync(join(root, '.env.example'), 'utf8')
    const netlify = readFileSync(join(root, 'netlify.toml'), 'utf8')
    const helper = readFileSync(join(root, 'lib/umami.ts'), 'utf8')
    assert.match(layout, /from '@\/components\/Umami'/)
    assert.match(helper, /function shouldLoadUmami/)
    assert.match(helper, /function sanitizePayload/)
    assert.match(env, /NEXT_PUBLIC_UMAMI_WEBSITE_ID/)
    assert.match(netlify, /https:\/\/analytics\.opsdevco\.de/)
    assert.match(netlify, /deploy-preview or branch-deploy/)
    assert.doesNotMatch(netlify, /NEXT_PUBLIC_UMAMI_WEBSITE_ID=/)
    assert.ok(!helper.includes('umami.identify'))
  })
})
