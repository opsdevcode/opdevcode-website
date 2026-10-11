export const MINT_HUB_HREF = '/products/mint'
export const MINT_GET_STARTED_HREF = '/products/mint/get-started'
export const MINT_PLATFORM_TEAMS_HREF = '/products/mint/platform-teams'
export const MINT_DEVELOPERS_HREF = '/products/mint/developers'
export const MINT_INTEGRATION_AUTHORS_HREF = '/products/mint/integration-authors'

/** Registry catalog listing is owned by mint-registry / #136. Do not recreate here. */
export const MINT_INTEGRATIONS_HREF = '/products/mint/integrations'

export const MINT_JOURNEY_NAV = [
  { href: MINT_HUB_HREF, label: 'Mint' },
  { href: MINT_PLATFORM_TEAMS_HREF, label: 'Platform teams' },
  { href: MINT_DEVELOPERS_HREF, label: 'Developers' },
  { href: MINT_INTEGRATION_AUTHORS_HREF, label: 'Integration authors' },
  { href: MINT_GET_STARTED_HREF, label: 'Get started' },
] as const

export const MINT_AUDIENCES = [
  {
    href: MINT_PLATFORM_TEAMS_HREF,
    title: 'Platform leaders',
    blurb: 'Give teams a shared way to name change without collapsing domain ownership.',
  },
  {
    href: MINT_DEVELOPERS_HREF,
    title: 'Developers',
    blurb: 'Install locally, compile intent, and inspect an offline plan.',
  },
  {
    href: MINT_GET_STARTED_HREF,
    title: 'Application teams',
    blurb: 'Pin Mint on pull request. No apply. No live cloud mutation.',
  },
  {
    href: MINT_INTEGRATION_AUTHORS_HREF,
    title: 'Integration authors',
    blurb: 'Realize a capability for a service. Execution stays fail-closed.',
  },
] as const
