import { CALENDLY_URL, PRODUCT_URLS, waitlistUrl } from '@/lib/site'

export type ProductSlug = 'repave' | 'overpass' | 'toll' | 'dispatch'

export type ProductMaturity = 'early-access' | 'in-development' | 'emerging'

export type Product = {
  slug: ProductSlug
  name: string
  domain: string
  job: string
  summary: string
  body: string[]
  owns: string[]
  doesNot: string[]
  maturity: ProductMaturity
  maturityLabel: string
  maturityIndex: string
  maturityNote: string
  compareRole: string
  href: string
  publicUrl: string
  ctaLabel: string
  ctaHref: string
  secondaryHref?: string
  secondaryLabel?: string
}

export const maturityCopy: Record<ProductMaturity, string> = {
  'early-access': 'Early access',
  'in-development': 'In development',
  emerging: 'Emerging',
}

export const products: Product[] = [
  {
    slug: 'repave',
    name: 'Repave',
    domain: 'Governed software delivery',
    job: 'Generate. Adopt. Configure. Upgrade. Observe. Remediate.',
    summary:
      'Keep a repository on an approved path with deterministic gates, provenance, and evidence.',
    body: [
      'Repave owns the governed lifecycle of software repositories: golden-path generation, brownfield adoption, configuration change on an approved baseline, standards upgrades, observation of governed state, and restore of supported drift.',
      'Those lifecycle capabilities are implemented. Hosted access is waitlist and invite — not general self-serve availability. Portal and catalog surfaces are ways to use Repave; they are not the product category, and Repave is not the OpsDevCode umbrella.',
    ],
    owns: [
      'Repository generation from approved blueprints',
      'Brownfield adoption without rewriting source',
      'Governed configuration change',
      'Standards and baseline upgrades',
      'Observe and supported remediate of governed files',
      'Deterministic gates and delivery evidence',
    ],
    doesNot: [
      'Infrastructure state custody (Overpass)',
      'Engineering economics (Toll)',
      'Cross-domain intelligent experience (Dispatch)',
    ],
    maturity: 'early-access',
    maturityLabel: 'Early access',
    maturityIndex: '01',
    compareRole: 'Govern delivery',
    maturityNote:
      'Implemented: generate, adopt, configure, upgrade, observe, and remediate. Hosted generate is waitlist-first. Invoice is the current close. There is no card form on the waitlist.',
    href: '/products/repave',
    publicUrl: PRODUCT_URLS.repave,
    ctaLabel: 'Explore Repave',
    ctaHref: PRODUCT_URLS.repave,
    secondaryHref: waitlistUrl('repave'),
    secondaryLabel: 'Join waitlist',
  },
  {
    slug: 'overpass',
    name: 'Overpass',
    domain: 'Infrastructure state and understanding',
    job: 'Custody, relationships, drift, blast radius, transactions.',
    summary:
      'Understand the infrastructure estate without treating live cloud drift as a software-delivery problem.',
    body: [
      'Overpass owns infrastructure state: Terraform and OpenTofu custody, inventory, resource relationships, blast radius, drift, and gated state transactions.',
      'It does not own software delivery or engineering economics. Hosted state custody is off by default and enabled per early-access partner. This is not general availability.',
    ],
    owns: [
      'Terraform and OpenTofu state custody',
      'Infrastructure inventory and relationships',
      'Blast radius and drift',
      'Gated state transactions',
      'Infrastructure state evidence',
    ],
    doesNot: [
      'Software delivery lifecycle',
      'Engineering economics',
      'Invoicing or billing warehouses',
    ],
    maturity: 'in-development',
    maturityLabel: 'In development',
    maturityIndex: '02',
    compareRole: 'Understand state',
    maturityNote:
      'Product identity and engine pieces exist. The hosted state store is off by default. Join the waitlist or talk to OpsDevCode for early access. Do not treat Overpass as generally available.',
    href: '/products/overpass',
    publicUrl: PRODUCT_URLS.overpass,
    ctaLabel: 'Join waitlist',
    ctaHref: waitlistUrl('overpass'),
    secondaryHref: CALENDLY_URL,
    secondaryLabel: 'Talk to OpsDevCode',
  },
  {
    slug: 'toll',
    name: 'Toll',
    domain: 'Engineering economics',
    job: 'Spend, ownership, utilization, waste, coverage.',
    summary: 'Connect spend and utilization evidence back to engineering ownership and decisions.',
    body: [
      'Toll owns engineering economics: spend attribution, ownership correlation, utilization evidence, waste findings, and commitment coverage as evidence.',
      'It does not invoice, warehouse billing extracts, or execute purchases. A human buys commitments. Hosted cost periods are off by default. This is not general availability, and Toll does not claim savings percentages.',
    ],
    owns: [
      'Spend attribution at resource grain',
      'Ownership and catalog correlation',
      'Utilization evidence',
      'Waste findings',
      'Commitment coverage evidence',
    ],
    doesNot: [
      'Invoicing and purchase execution',
      'Autonomous commitment purchases',
      'A full billing warehouse',
      'Software delivery or state custody',
    ],
    maturity: 'in-development',
    maturityLabel: 'In development',
    maturityIndex: '03',
    compareRole: 'Attribute economics',
    maturityNote:
      'The economics boundary is defined and capture exists for early-access enablement. Toll is not a standalone billing platform and is not generally available.',
    href: '/products/toll',
    publicUrl: PRODUCT_URLS.toll,
    ctaLabel: 'Join waitlist',
    ctaHref: waitlistUrl('toll'),
    secondaryHref: CALENDLY_URL,
    secondaryLabel: 'Talk to OpsDevCode',
  },
  {
    slug: 'dispatch',
    name: 'Dispatch',
    domain: 'Governed intelligent experience',
    job: 'Intent → proposal → governed action.',
    summary:
      'Ask, propose, and where allowed act across engineering domains without moving policy authority into the agent.',
    body: [
      'Dispatch is not a fourth data domain. It consumes capabilities from Repave, Overpass, and Toll. Domain products remain authoritative.',
      'Trust modes are Advisory, Supervisory, and Autonomous. Dispatch never evaluates its own policy, invents evidence, or approves its own work. Today, agent execution on Repave is limited primarily to generate. Broader cross-domain action is not a current hosted path.',
    ],
    owns: ['Intent to proposal to governed action experience', 'Trust-ladder policy of use'],
    doesNot: [
      'Gate or policy evaluation',
      'Domain stores for delivery, state, or spend',
      'Approving its own work',
    ],
    maturity: 'emerging',
    maturityLabel: 'Emerging',
    maturityIndex: '04',
    compareRole: 'Ask and act',
    maturityNote:
      'The architecture and trust model are defined. Do not read current Dispatch as general autonomy or as a generally available agent product.',
    href: '/products/dispatch',
    publicUrl: PRODUCT_URLS.dispatch,
    ctaLabel: 'Join waitlist',
    ctaHref: waitlistUrl('dispatch'),
    secondaryHref: CALENDLY_URL,
    secondaryLabel: 'Talk to OpsDevCode',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const productSlugs: ProductSlug[] = products.map((p) => p.slug)
