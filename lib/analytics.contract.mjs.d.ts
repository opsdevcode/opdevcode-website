export const SCRIPT_URL: string
export const EVENTS: readonly string[]
export const PRODUCTS: readonly string[]
export const SOURCE_SURFACES: readonly string[]
export const CTAS: readonly string[]
export const PROOF_TYPES: readonly string[]
export const DESTINATION_PRODUCTS: readonly string[]
export const PROPERTY_KEYS: readonly string[]
export const FORBIDDEN_KEYS: readonly string[]
export const TRACKED_HOSTS: readonly string[]
export const ALLOWED_DOMAINS: string[]
export function allowedDomainsAttr(): string
export function analyticsBuildEnabled(env?: NodeJS.ProcessEnv): boolean
export function trackerEnabled(hostname: string, env?: NodeJS.ProcessEnv): boolean
export function sourceSurfaceFromPath(pathname: string): string
export function buildEvent(
  name: string,
  properties: Record<string, string>
): { name: string; properties: Record<string, string> } | null
export function inferPublicEvent(
  href: string,
  pathname: string
): { name: string; properties: Record<string, string> } | null
