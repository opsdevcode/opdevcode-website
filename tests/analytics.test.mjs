import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  analyticsBuildEnabled,
  buildEvent,
  inferPublicEvent,
  sourceSurfaceFromPath,
  trackerEnabled,
} from '../lib/analytics.contract.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('public-estate analytics contract', () => {
  it('enables the tracker only for production builds with a website id', () => {
    const id = '11111111-1111-4111-8111-111111111111'
    assert.equal(analyticsBuildEnabled({}), false)
    assert.equal(analyticsBuildEnabled({ NEXT_PUBLIC_UMAMI_WEBSITE_ID: id }), true)
    assert.equal(
      analyticsBuildEnabled({
        NEXT_PUBLIC_UMAMI_WEBSITE_ID: id,
        CONTEXT: 'deploy-preview',
      }),
      false
    )
    assert.equal(
      analyticsBuildEnabled({
        NEXT_PUBLIC_UMAMI_WEBSITE_ID: id,
        CONTEXT: 'production',
      }),
      true
    )
    assert.equal(trackerEnabled('localhost', { NEXT_PUBLIC_UMAMI_WEBSITE_ID: id }), false)
    assert.equal(
      trackerEnabled('opsdevco.de', {
        NEXT_PUBLIC_UMAMI_WEBSITE_ID: id,
        CONTEXT: 'production',
      }),
      true
    )
    assert.equal(
      trackerEnabled('analytics.opsdevco.de', { NEXT_PUBLIC_UMAMI_WEBSITE_ID: id }),
      false
    )
  })

  it('rejects forbidden and free-form event properties', () => {
    assert.equal(buildEvent('page_view', { product: 'repave' }), null)
    assert.equal(
      buildEvent('product_explore', {
        product: 'repave',
        source_surface: 'company_home',
        destination_product: 'repave',
        email: 'founder@example.com',
      }),
      null
    )
    assert.equal(
      buildEvent('product_explore', {
        product: 'repave',
        repository: 'opsdevcode/repave',
        source_surface: 'company_home',
        destination_product: 'repave',
      }),
      null
    )
    assert.equal(
      buildEvent('evaluation_submit', {
        product: 'repave',
        source_surface: 'waitlist',
        cta: 'evaluate',
        query: 'intent=evaluate&email=a@b.c',
      }),
      null
    )
    assert.equal(
      buildEvent('product_explore', {
        product: 'not-a-product',
        source_surface: 'company_home',
        destination_product: 'repave',
      }),
      null
    )
    assert.deepEqual(
      buildEvent('product_explore', {
        product: 'repave',
        source_surface: 'company_home',
        destination_product: 'repave',
      }),
      {
        name: 'product_explore',
        properties: {
          product: 'repave',
          source_surface: 'company_home',
          destination_product: 'repave',
        },
      }
    )
  })

  it('infers controlled events without copying query or link text', () => {
    assert.equal(sourceSurfaceFromPath('/'), 'company_home')
    assert.equal(sourceSurfaceFromPath('/products/repave'), 'products')
    const explore = inferPublicEvent('https://repave.opsdevco.de/', '/')
    assert.deepEqual(explore, {
      name: 'product_explore',
      properties: {
        product: 'repave',
        source_surface: 'company_home',
        destination_product: 'repave',
      },
    })
    const cta = inferPublicEvent(
      'https://repave.opsdevco.de/waitlist?intent=evaluate&email=hidden@example.com',
      '/products'
    )
    assert.deepEqual(cta, {
      name: 'evaluation_cta',
      properties: {
        product: 'repave',
        source_surface: 'products',
        cta: 'evaluate',
      },
    })
    assert.equal(JSON.stringify(cta).includes('hidden@example.com'), false)
    assert.equal(JSON.stringify(cta).includes('intent='), false)
    const talk = inferPublicEvent('https://calendly.com/eric-opsdevco/30min', '/about')
    assert.equal(talk?.name, 'evaluation_cta')
    assert.equal(talk?.properties.cta, 'contact')
    assert.equal(inferPublicEvent('https://github.com/opsdevcode/repave', '/'), null)
  })

  it('keeps production CSP and privacy copy aligned with first-party Umami', () => {
    const netlify = readFileSync(join(root, 'netlify.toml'), 'utf8')
    const privacy = readFileSync(join(root, 'src/app/privacy/page.tsx'), 'utf8')
    const layout = readFileSync(join(root, 'src/app/layout.tsx'), 'utf8')
    assert.match(netlify, /https:\/\/analytics\.opsdevco\.de/)
    assert.match(netlify, /connect-src 'self' https:\/\/analytics\.opsdevco\.de/)
    assert.match(privacy, /analytics\.opsdevco\.de/)
    assert.match(privacy, /not product evidence/)
    assert.match(layout, /UmamiTracker/)
    assert.match(layout, /GtmClicks/)
    assert.doesNotMatch(privacy, /No analytics, no tracking pixels, no cookies/)
  })
})
