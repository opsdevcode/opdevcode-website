export const SITE_URL = 'https://opsdevco.de'
export const CALENDLY_URL = 'https://calendly.com/eric-opsdevco/30min'
export const CONTACT_EMAIL = 'eric@opsdevco.de'

export const PRODUCT_URLS = {
  repave: 'https://repave.opsdevco.de',
  overpass: 'https://overpass.opsdevco.de',
  toll: 'https://toll.opsdevco.de',
  dispatch: 'https://dispatch.opsdevco.de',
} as const

/** Dedicated product hosts that currently answer HTTP. Dead hosts must not be linked from the company site. */
export const PRODUCT_HOST_LIVE: Record<keyof typeof PRODUCT_URLS, boolean> = {
  repave: true,
  overpass: false,
  toll: false,
  dispatch: false,
}

export function productSiteHref(slug: keyof typeof PRODUCT_URLS): string {
  if (PRODUCT_HOST_LIVE[slug]) {
    return PRODUCT_URLS[slug]
  }
  return `/products/${slug}`
}

export const REPAVE_URL = PRODUCT_URLS.repave
export const REPAVE_PROOF_URL = `${REPAVE_URL}/proof`
export const REPAVE_WAITLIST_URL = `${REPAVE_URL}/waitlist`
export const CONVERGENCE_URL = 'https://github.com/opsdevcode/convergence'
export const GITHUB_ORG_URL = 'https://github.com/opsdevcode'

export const SITE_TITLE = 'OpsDevCode'
export const SITE_TAGLINE = 'Governed golden paths for platform engineering.'
export const SITE_SHARE_TITLE = `OpsDevCode — ${SITE_TAGLINE.replace(/\.$/, '')}`
export const COMPANY_MARK_SRC = '/brand/mark-opsdevcode.svg'
export const COMPANY_LOCKUP_SRC = '/brand/lockup-opsdevcode.svg'
export const COMPANY_LOGO_SRC = '/brand/favicon-opsdevcode.svg'
export const COMPANY_BANNER_SRC = '/brand/og-opsdevcode.svg'

export const SITE_DESCRIPTION =
  'OpsDevCode builds engineering infrastructure for a world of humans, automation, and agents: governed software delivery, infrastructure state, engineering economics, and a governed intelligent experience.'

export function waitlistUrl(product: keyof typeof PRODUCT_URLS): string {
  if (product === 'repave') {
    return REPAVE_WAITLIST_URL
  }
  return `${REPAVE_WAITLIST_URL}?product=${product}`
}
