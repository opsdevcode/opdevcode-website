/** GTM public-estate analytics contract. Not product evidence. */

export const SCRIPT_URL = 'https://analytics.opsdevco.de/script.js'

export const EVENTS = Object.freeze([
  'product_explore',
  'proof_view',
  'evaluation_cta',
  'evaluation_start',
  'evaluation_submit',
])

export const PRODUCTS = Object.freeze(['company', 'mint', 'repave', 'overpass', 'toll', 'dispatch'])

export const SOURCE_SURFACES = Object.freeze([
  'company_home',
  'products',
  'product_home',
  'proof',
  'waitlist',
  'sibling_product',
  'other_public',
  'labs',
])

export const CTAS = Object.freeze(['explore', 'proof', 'evaluate', 'contact', 'waitlist'])

export const PROOF_TYPES = Object.freeze(['lifecycle', 'other'])

export const DESTINATION_PRODUCTS = Object.freeze(['repave', 'overpass', 'toll', 'dispatch'])

export const PROPERTY_KEYS = Object.freeze([
  'product',
  'source_surface',
  'cta',
  'proof_type',
  'destination_product',
])

export const FORBIDDEN_KEYS = Object.freeze([
  'email',
  'name',
  'phone',
  'repository',
  'repo',
  'token',
  'username',
  'organization',
  'ip',
  'query',
  'url',
  'href',
  'text',
  'value',
])

export const TRACKED_HOSTS = Object.freeze([
  'opsdevco.de',
  'www.opsdevco.de',
  'repave.opsdevco.de',
  'overpass.opsdevco.de',
  'toll.opsdevco.de',
  'dispatch.opsdevco.de',
])

export const ALLOWED_DOMAINS = TRACKED_HOSTS.filter((host) => host !== 'www.opsdevco.de')

const HOST_PRODUCT = Object.freeze({
  'repave.opsdevco.de': 'repave',
  'overpass.opsdevco.de': 'overpass',
  'toll.opsdevco.de': 'toll',
  'dispatch.opsdevco.de': 'dispatch',
})

const WEBSITE_ID_RE =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/

export function allowedDomainsAttr() {
  return ALLOWED_DOMAINS.join(',')
}

export function analyticsBuildEnabled(env = process.env) {
  const websiteId = String(env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || '').trim()
  if (!websiteId || !WEBSITE_ID_RE.test(websiteId)) return false
  const context = String(env.CONTEXT || env.NEXT_PUBLIC_NETLIFY_CONTEXT || '')
  if (context && context !== 'production') return false
  return true
}

export function trackerEnabled(hostname, env = process.env) {
  const host = String(hostname || '')
    .split(':')[0]
    .toLowerCase()
  return analyticsBuildEnabled(env) && TRACKED_HOSTS.includes(host)
}

export function sourceSurfaceFromPath(pathname) {
  const path = String(pathname || '')
  if (path === '/' || path === '') return 'company_home'
  if (path === '/products' || path.startsWith('/products/')) return 'products'
  if (path === '/labs' || path.startsWith('/labs/')) return 'labs'
  return 'other_public'
}

function allowedValue(key, value) {
  if (key === 'product') return PRODUCTS.includes(value)
  if (key === 'source_surface') return SOURCE_SURFACES.includes(value)
  if (key === 'cta') return CTAS.includes(value)
  if (key === 'proof_type') return PROOF_TYPES.includes(value)
  if (key === 'destination_product') return DESTINATION_PRODUCTS.includes(value)
  return false
}

/** @param {string} name @param {Record<string, string>} [properties] */
export function buildEvent(name, properties) {
  if (!EVENTS.includes(name)) return null
  const out = {}
  for (const [key, value] of Object.entries(properties || {})) {
    if (FORBIDDEN_KEYS.includes(key) || !PROPERTY_KEYS.includes(key)) return null
    if (typeof value !== 'string' || !allowedValue(key, value)) return null
    out[key] = value
  }
  return { name, properties: out }
}

function waitlistProduct(raw) {
  return DESTINATION_PRODUCTS.includes(raw) ? raw : 'repave'
}

export function inferPublicEvent(href, pathname) {
  const sourceSurface = sourceSurfaceFromPath(pathname)
  let url
  try {
    url = new URL(href, 'https://opsdevco.de')
  } catch {
    return null
  }

  if (url.protocol === 'mailto:') {
    return buildEvent('evaluation_cta', {
      product: 'company',
      source_surface: sourceSurface,
      cta: 'contact',
    })
  }

  if (url.hostname === 'calendly.com') {
    return buildEvent('evaluation_cta', {
      product: 'company',
      source_surface: sourceSurface,
      cta: 'contact',
    })
  }

  if (url.hostname === 'repave.opsdevco.de' && url.pathname.startsWith('/waitlist')) {
    const product = waitlistProduct(url.searchParams.get('product') || 'repave')
    const cta = url.searchParams.get('intent') === 'evaluate' ? 'evaluate' : 'waitlist'
    return buildEvent('evaluation_cta', {
      product,
      source_surface: sourceSurface,
      cta,
    })
  }

  const destination = HOST_PRODUCT[url.hostname]
  if (!destination) return null
  return buildEvent('product_explore', {
    product: destination,
    source_surface: sourceSurface,
    destination_product: destination,
  })
}
