export const SITE_URL = 'https://opsdevco.de'
export const CALENDLY_URL = 'https://calendly.com/eric-opsdevco/30min'
export const CONTACT_EMAIL = 'eric@opsdevco.de'

export const PRODUCT_URLS = {
  repave: 'https://repave.opsdevco.de',
  overpass: 'https://overpass.opsdevco.de',
  toll: 'https://toll.opsdevco.de',
  dispatch: 'https://dispatch.opsdevco.de',
} as const

export const REPAVE_URL = PRODUCT_URLS.repave
export const REPAVE_WAITLIST_URL = `${REPAVE_URL}/waitlist`
export const CONVERGENCE_URL = 'https://github.com/opsdevcode/convergence'
export const GITHUB_ORG_URL = 'https://github.com/opsdevcode'

export const SITE_TITLE = 'OpsDevCode'
export const SITE_TAGLINE = 'Infrastructure for modern engineering organizations.'

export const SITE_DESCRIPTION =
  'OpsDevCode builds engineering infrastructure for a world of humans, automation, and agents: governed software delivery, infrastructure state, engineering economics, and a governed intelligent experience.'

export function waitlistUrl(product: keyof typeof PRODUCT_URLS): string {
  if (product === 'repave') {
    return REPAVE_WAITLIST_URL
  }
  return `${REPAVE_WAITLIST_URL}?product=${product}`
}
