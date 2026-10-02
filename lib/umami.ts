export const UMAMI_SCRIPT_URL = 'https://analytics.opsdevco.de/script.js'
export const UMAMI_COLLECTOR_HOST = 'analytics.opsdevco.de'

export const CANONICAL_HOSTS = [
  'opsdevco.de',
  'www.opsdevco.de',
  'repave.opsdevco.de',
  'overpass.opsdevco.de',
  'toll.opsdevco.de',
  'dispatch.opsdevco.de',
] as const

export const UMAMI_DOMAINS = CANONICAL_HOSTS.join(',')

export const EVENTS = [
  'product_explore',
  'proof_view',
  'evaluation_cta',
  'evaluation_start',
  'evaluation_submit',
] as const

export type UmamiEvent = (typeof EVENTS)[number]

export const PRODUCTS = ['company', 'repave', 'overpass', 'toll', 'dispatch'] as const
export type ProductName = (typeof PRODUCTS)[number]

export const CTAS = ['request_access', 'evaluate', 'talk', 'waitlist'] as const
export type CtaName = (typeof CTAS)[number]

export const PROOF_TYPES = ['exhibit', 'lifecycle', 'sample'] as const

export const PROP_KEYS = [
  'product',
  'source_surface',
  'cta',
  'proof_type',
  'destination_product',
] as const

const ENUMS: Record<(typeof PROP_KEYS)[number], readonly string[]> = {
  product: PRODUCTS,
  source_surface: PRODUCTS,
  destination_product: PRODUCTS,
  cta: CTAS,
  proof_type: PROOF_TYPES,
}

export type UmamiProps = Partial<{
  product: ProductName
  source_surface: ProductName
  destination_product: ProductName
  cta: CtaName
  proof_type: (typeof PROOF_TYPES)[number]
}>

export function normalizeHost(host: string | null | undefined): string {
  return (host || '').split(':')[0].trim().toLowerCase()
}

export function isCanonicalHost(host: string | null | undefined): boolean {
  const hostname = normalizeHost(host)
  return (CANONICAL_HOSTS as readonly string[]).includes(hostname)
}

export function shouldLoadUmami(
  host: string | null | undefined,
  websiteId: string | null | undefined,
): boolean {
  const id = (websiteId || '').trim()
  if (!id) return false
  const hostname = normalizeHost(host)
  if (!hostname || hostname === UMAMI_COLLECTOR_HOST) return false
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1') return false
  if (hostname.endsWith('.netlify.app') || hostname.endsWith('.netlify.com')) return false
  if (hostname.includes('localhost')) return false
  return isCanonicalHost(hostname)
}

export function sanitizePayload(
  event: string,
  props: Record<string, unknown> | null | undefined,
): { event: UmamiEvent; props: UmamiProps } | null {
  if (!(EVENTS as readonly string[]).includes(event)) return null
  const out: UmamiProps = {}
  if (props && typeof props === 'object') {
    for (const key of PROP_KEYS) {
      const value = props[key]
      if (typeof value !== 'string') continue
      if (ENUMS[key].includes(value)) {
        ;(out as Record<string, string>)[key] = value
      }
    }
  }
  return { event: event as UmamiEvent, props: out }
}

export function destinationFromHref(href: string): ProductName | undefined {
  const value = href.toLowerCase()
  if (value.includes('repave.opsdevco.de')) return 'repave'
  if (value.includes('overpass.opsdevco.de')) return 'overpass'
  if (value.includes('toll.opsdevco.de')) return 'toll'
  if (value.includes('dispatch.opsdevco.de')) return 'dispatch'
  if (value.includes('opsdevco.de') && !value.includes('analytics.opsdevco.de')) {
    return 'company'
  }
  const briefing = value.match(/\/products\/(repave|overpass|toll|dispatch)\b/)
  if (briefing) return briefing[1] as ProductName
  return undefined
}

export function classifyCompanyClick(href: string): { event: UmamiEvent; props: UmamiProps } | null {
  const value = href.trim()
  if (!value || value.startsWith('#') || value.startsWith('mailto:')) return null
  const dest = destinationFromHref(value)
  if (/calendly\.com/i.test(value)) {
    return {
      event: 'evaluation_cta',
      props: { product: 'company', source_surface: 'company', cta: 'talk' },
    }
  }
  if (/\/waitlist/i.test(value)) {
    const cta: CtaName = /intent=evaluate/i.test(value) ? 'evaluate' : 'waitlist'
    return {
      event: 'evaluation_cta',
      props: {
        product: dest && dest !== 'company' ? dest : 'repave',
        source_surface: 'company',
        cta,
        destination_product: dest && dest !== 'company' ? dest : 'repave',
      },
    }
  }
  if (dest && dest !== 'company') {
    return {
      event: 'product_explore',
      props: { product: 'company', source_surface: 'company', destination_product: dest },
    }
  }
  return null
}

export function trackUmami(event: string, props?: Record<string, unknown>): void {
  try {
    if (typeof window === 'undefined') return
    if (!shouldLoadUmami(window.location.hostname, process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID)) {
      return
    }
    const safe = sanitizePayload(event, props)
    if (!safe) return
    const tracker = (window as Window & { umami?: { track?: (n: string, p?: object) => void } })
      .umami
    if (typeof tracker?.track !== 'function') return
    tracker.track(safe.event, safe.props)
  } catch {
    // Analytics must never block UX.
  }
}
