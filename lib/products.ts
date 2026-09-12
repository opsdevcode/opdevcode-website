import {
  CALENDLY_URL,
  PRODUCT_URLS,
  REPAVE_EVALUATE_URL,
  REPAVE_PROOF_URL,
  productSiteHref,
} from '@/lib/site'

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
      'Implemented: generate, adopt, configure, upgrade, observe, and remediate. Hosted generate is waitlist and invite, not general self-serve. There is no card form on the waitlist.',
    href: '/products/repave',
    publicUrl: productSiteHref('repave'),
    ctaLabel: 'Try Repave with your repository',
    ctaHref: REPAVE_EVALUATE_URL,
    secondaryHref: REPAVE_PROOF_URL,
    secondaryLabel: 'See the governed lifecycle',
  },
  {
    slug: 'overpass',
    name: 'Overpass',
    domain: 'Infrastructure state and understanding',
    job: 'Custody. Relationships. Drift. Impact. Transactions.',
    summary:
      'Keep stored infrastructure state readable — inventory, dependency, and gated change — without treating live cloud observation as a software-delivery problem.',
    body: [
      'Overpass understands infrastructure from state it holds: inventory, proven relationships, impact from that stored reachability, drift against that understanding, and gated state transactions.',
      'Those capabilities are implemented in the Overpass runtime. This is not live-cloud discovery, not a cloud apply engine, and not generally available. Hosted custody is enabled per early-access partner.',
    ],
    owns: [
      'Terraform and OpenTofu state custody',
      'Infrastructure inventory from stored state',
      'Relationships proven from stored state',
      'Impact from stored reachability, not predicted outage',
      'Drift against stored understanding',
      'Gated state transactions that do not apply cloud resources',
    ],
    doesNot: [
      'Software delivery lifecycle (Repave)',
      'Engineering economics (Toll)',
      'Cross-domain intelligent experience (Dispatch)',
    ],
    maturity: 'in-development',
    maturityLabel: 'In development',
    maturityIndex: '02',
    compareRole: 'Understand state',
    maturityNote:
      'Implementation-backed and in development. Inventory, relationships, impact, drift, and commit exist against stored state. Do not treat Overpass as live-cloud authority or as generally available.',
    href: '/products/overpass',
    publicUrl: productSiteHref('overpass'),
    ctaLabel: 'Explore Overpass',
    ctaHref: PRODUCT_URLS.overpass,
    secondaryHref: CALENDLY_URL,
    secondaryLabel: 'Talk to OpsDevCode',
  },
  {
    slug: 'toll',
    name: 'Toll',
    domain: 'Engineering economics',
    job: 'Spend. Ownership. Utilization. Evidence.',
    summary:
      'Connect spend and utilization evidence back to engineering ownership and decisions — as evidence, not as an invoice.',
    body: [
      'Toll is the engineering economics product: it connects cost and utilization evidence to ownership without becoming a billing warehouse or a savings engine.',
      'FOCUS ingest, persistence, and utilization sampling run in Toll. Spend attribution and waste recommendation still execute in Repave until later extraction. Toll does not invoice, execute purchases, or claim savings percentages.',
    ],
    owns: [
      'FOCUS ingest and persistence as cost evidence',
      'Utilization sampling from identified sources',
      'Engineering identity for ownership correlation',
      'Product authority for spend-to-ownership questions; spend/waste execution still in Repave',
      'Refusal to treat missing utilization as zero',
      'Period capture without invoice authority',
    ],
    doesNot: [
      'Invoicing and purchase execution',
      'Autonomous commitment purchases',
      'A full billing warehouse',
      'Software delivery (Repave) or state custody (Overpass)',
    ],
    maturity: 'in-development',
    maturityLabel: 'In development',
    maturityIndex: '03',
    compareRole: 'Attribute economics',
    maturityNote:
      'In development. FOCUS ingest/persistence and utilization are implemented in Toll. Spend attribution and waste recommendation still execute in Repave. Not generally available. No savings percentages.',
    href: '/products/toll',
    publicUrl: productSiteHref('toll'),
    ctaLabel: 'Explore Toll',
    ctaHref: PRODUCT_URLS.toll,
    secondaryHref: CALENDLY_URL,
    secondaryLabel: 'Talk to OpsDevCode',
  },
  {
    slug: 'dispatch',
    name: 'Dispatch',
    domain: 'Governed intelligent experience',
    job: 'Intent. Proposal. Gate. Action.',
    summary:
      'Ask, propose, and where allowed act across engineering domains without moving policy authority into the agent.',
    body: [
      'Dispatch is the governed interaction product: intent to proposal to allowed action. It consumes Repave, Overpass, and Toll; those products remain authoritative. It is not a fourth data domain.',
      'The public Dispatch host is identity, not the hosted assistant. Today the assistant still runs in Repave. Generate is the wired write. Reads can surface other capabilities. Dispatch never evaluates policy or approves its own work. This is not a standalone four-product interaction product.',
    ],
    owns: [
      'Intent capture into a proposal',
      'Trust-ladder policy of use',
      'Capability-backed tools without taking domain stores',
      'Evidence-bound action where a domain product allows it',
      'Refusal when policy or evidence is missing',
      'A public identity distinct from the current hosted assistant',
    ],
    doesNot: [
      'Gate or policy evaluation (stays in domain products)',
      'Domain stores for delivery, state, or spend',
      'Approving its own work',
      'General autonomy or a generally available agent product',
    ],
    maturity: 'emerging',
    maturityLabel: 'Emerging',
    maturityIndex: '04',
    compareRole: 'Ask and act',
    maturityNote:
      'Emerging. Public identity exists. The hosted assistant still runs in Repave. Dispatch does not approve its own work and is not a generally available agent product.',
    href: '/products/dispatch',
    publicUrl: productSiteHref('dispatch'),
    ctaLabel: 'Explore Dispatch',
    ctaHref: PRODUCT_URLS.dispatch,
    secondaryHref: CALENDLY_URL,
    secondaryLabel: 'Talk to OpsDevCode',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const productSlugs: ProductSlug[] = products.map((p) => p.slug)
