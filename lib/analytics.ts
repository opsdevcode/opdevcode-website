import { buildEvent } from './analytics.contract.mjs'

export {
  ALLOWED_DOMAINS,
  SCRIPT_URL,
  TRACKED_HOSTS,
  allowedDomainsAttr,
  analyticsBuildEnabled,
  inferPublicEvent,
  sourceSurfaceFromPath,
  trackerEnabled,
} from './analytics.contract.mjs'

export { buildEvent }

export type GtmEventName =
  'product_explore' | 'proof_view' | 'evaluation_cta' | 'evaluation_start' | 'evaluation_submit'

export type GtmProperties = {
  product?: 'company' | 'repave' | 'overpass' | 'toll' | 'dispatch'
  source_surface?:
    | 'company_home'
    | 'products'
    | 'product_home'
    | 'proof'
    | 'waitlist'
    | 'sibling_product'
    | 'other_public'
  cta?: 'explore' | 'proof' | 'evaluate' | 'contact' | 'waitlist'
  proof_type?: 'lifecycle' | 'other'
  destination_product?: 'repave' | 'overpass' | 'toll' | 'dispatch'
}

export type GtmEvent = {
  name: GtmEventName
  properties: GtmProperties
}

declare global {
  interface Window {
    umami?: { track: (name: string, data?: Record<string, string>) => void }
  }
}

export function track(event: GtmEvent): void {
  const built = buildEvent(event.name, event.properties as unknown as Record<string, string>)
  if (!built) return
  const umami = typeof window === 'undefined' ? undefined : window.umami
  if (!umami || typeof umami.track !== 'function') return
  try {
    umami.track(built.name, built.properties as Record<string, string>)
  } catch {
    // Analytics must never break the public site.
  }
}
