import { PRODUCT_URLS } from '@/lib/site'

export type ProductSlug = 'repave' | 'overpass' | 'toll' | 'dispatch'

export type ProductMaturity = 'available' | 'in-development' | 'emerging'

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
  ctaLabel: string
  ctaHref: string
  secondaryHref?: string
  secondaryLabel?: string
}

export const maturityCopy: Record<ProductMaturity, string> = {
  available: 'Available',
  'in-development': 'In development',
  emerging: 'Emerging',
}

export const products: Product[] = [
  {
    slug: 'repave',
    name: 'Repave',
    domain: 'Governed software delivery',
    job: 'Generate. Adopt. Configure. Upgrade.',
    summary:
      'Keep a repository on an approved path with deterministic gates, provenance, and evidence.',
    body: [
      'Repave owns the governed lifecycle of software repositories: golden-path generation, brownfield adoption, configuration change on an approved baseline, and standards upgrades.',
      'It is not an IDP, and it is not the OpsDevCode umbrella. Portal and catalog surfaces are ways to use Repave; they are not the product category.',
    ],
    owns: [
      'Repository generation from approved blueprints',
      'Brownfield adoption without rewriting source',
      'Governed configuration change',
      'Standards and baseline upgrades',
      'Deterministic gates and delivery evidence',
    ],
    doesNot: [
      'Infrastructure state custody (Overpass)',
      'Engineering economics (Toll)',
      'Cross-domain intelligent experience (Dispatch)',
    ],
    maturity: 'available',
    maturityLabel: 'Available',
    maturityIndex: '01',
    compareRole: 'Govern delivery',
    maturityNote:
      'The delivery lifecycle is implemented: generate, adopt, configure, and upgrade. Observe and remediate are not marketed as product capabilities yet.',
    href: '/products/repave',
    ctaLabel: 'Explore Repave',
    ctaHref: PRODUCT_URLS.repave,
    secondaryHref: 'https://github.com/opsdevcode/repave',
    secondaryLabel: 'GitHub',
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
      'It does not own software delivery or engineering economics. Runtime currently lives in the Repave engine; this is a domain product, not a Repave feature.',
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
      'Product identity and engine pieces exist. The hosted state store is off by default. Do not treat Overpass as a fully standalone operational product yet.',
    href: '/products/overpass',
    ctaLabel: 'Overpass on GitHub',
    ctaHref: 'https://github.com/opsdevcode/overpass',
  },
  {
    slug: 'toll',
    name: 'Toll',
    domain: 'Engineering economics',
    job: 'Spend, ownership, utilization, waste, coverage.',
    summary: 'Connect spend and utilization evidence back to engineering ownership and decisions.',
    body: [
      'Toll owns engineering economics: spend attribution, ownership correlation, utilization evidence, waste findings, and commitment coverage.',
      'It does not invoice, warehouse billing extracts, or execute purchases. Capture currently lives in the Repave runtime; hosted cost periods are off by default.',
    ],
    owns: [
      'Spend attribution at resource grain',
      'Ownership and catalog correlation',
      'Utilization evidence',
      'Waste findings',
      'Commitment coverage',
    ],
    doesNot: [
      'Invoicing and purchase execution',
      'A full billing warehouse',
      'Software delivery or state custody',
    ],
    maturity: 'in-development',
    maturityLabel: 'In development',
    maturityIndex: '03',
    compareRole: 'Attribute economics',
    maturityNote:
      'The economics boundary is defined and some capture exists in the Repave runtime. Toll is not a standalone billing platform.',
    href: '/products/toll',
    ctaLabel: 'Toll on GitHub',
    ctaHref: 'https://github.com/opsdevcode/toll',
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
      'Trust modes are Advisory, Supervisory, and Autonomous. Dispatch never evaluates its own policy, invents evidence, or approves its own work. Today, agent execution in Repave is limited primarily to generate.',
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
      'The architecture and trust model are defined. Broader cross-domain action is still developing. Do not read current Dispatch as general autonomy.',
    href: '/products/dispatch',
    ctaLabel: 'Dispatch on GitHub',
    ctaHref: 'https://github.com/opsdevcode/dispatch',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const productSlugs: ProductSlug[] = products.map((p) => p.slug)
