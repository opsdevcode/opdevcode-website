/** Public-safe company vs platform language. No Mint syntax, providers, or customer results. */

export const OUTCOME_LINE = 'Define the outcome.'
export const GOVERN_LINE = 'Govern the change.'
export const VERIFY_LINE = 'Verify the result.'

export const COMPANY_NAME = 'OpsDevCode'
export const PLATFORM_NAME = 'OpsDevCode Platform'

export const ACCESS_PLANS = [
  {
    name: 'Team',
    summary: 'Invited-organization access for a single team adopting one or more products.',
  },
  {
    name: 'Growth',
    summary: 'Invited-organization access when several teams share the same governed platform.',
  },
] as const
