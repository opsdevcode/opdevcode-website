/** Content for /services/[slug] detail pages (static export). */

export type ServiceSlug =
  | 'platform-health'
  | 'finops'
  | 'iac'
  | 'cicd'
  | 'kubernetes'
  | 'custom-tooling'
  | 'architecture-review'
  | 'fractional-advisor'

export const serviceSlugs: ServiceSlug[] = [
  'platform-health',
  'finops',
  'iac',
  'cicd',
  'kubernetes',
  'custom-tooling',
  'architecture-review',
  'fractional-advisor',
]

export type ServiceDetail = {
  slug: ServiceSlug
  title: string
  description: string
  lead: string
  addresses: string
  includes: string[]
  engagement: string
  distinction?: string
}

export const servicesBySlug: Record<ServiceSlug, ServiceDetail> = {
  'platform-health': {
    slug: 'platform-health',
    title: 'Platform Health Check',
    description:
      'Find bottlenecks, risks, and unnecessary complexity in a production platform, with prioritized next steps.',
    lead: 'A read-first pass across cloud accounts, Kubernetes, and IaC — findings leadership and the team can execute.',
    addresses:
      'Unclear ownership, upgrade risk, billing noise, and change paths that only a few people understand.',
    includes: [
      'AWS and GCP account structure, billing signals, and obvious waste',
      'EKS clusters, node groups, add-ons, and upgrade posture',
      'IaC touchpoints: Terraform, Pulumi, or Crossplane — layout, state, and how changes land in CI',
      'Written findings plus a short call to walk through priorities',
    ],
    engagement:
      'Usually a few days of discovery, then a time-boxed deliverable. Not an open-ended audit.',
  },
  finops: {
    slug: 'finops',
    title: 'FinOps',
    description:
      'Consulting work to reduce cloud waste and make spend visible to engineering and finance. Distinct from Toll, the engineering economics product.',
    lead: 'Align billing and usage with how workloads actually run — tagging, allocation, and infrastructure changes both sides can agree on.',
    addresses:
      'Spend that cannot be attributed, idle capacity, and finance/engineering pictures that do not match.',
    includes: [
      'Billing and usage signals: accounts, SKUs, savings plans, and idle capacity',
      'EKS and compute: node strategy, consolidation, and autoscaling behavior',
      'Kubernetes autoscaling and node behavior where it matters',
      'Clear before/after targets so finance and engineering share the same picture',
    ],
    engagement:
      'Often pairs with a health check. The work targets changes that remain operable — not one-off console tweaks.',
    distinction:
      'This is adoption and optimization work. Toll is the engineering economics product. A FinOps engagement does not imply Toll is deployed.',
  },
  iac: {
    slug: 'iac',
    title: 'IaC',
    description:
      'Standardize infrastructure as code so applies are predictable, owned, and reviewable.',
    lead: 'Terraform, Pulumi, or Crossplane — tighten layout, state, and how changes land in CI.',
    addresses:
      'Fragile state, snowflake modules, and applies that only a handful of people will run.',
    includes: [
      'Terraform: modules, naming, dependency direction, state and workspaces, plan/apply hygiene, and policy gates where they earn their keep',
      'Pulumi: stacks and components, testing, and language-native patterns the team can sustain',
      'Crossplane: compositions, claims, provider configs, and keeping the control plane healthy through upgrades',
      'CI integration, promotion paths, and pairing so improvements survive the next hire cycle',
    ],
    engagement:
      'Scoped refactors or greenfield guardrails — PR-sized steps, clear owners, and docs people use. Implementation, pairing, or review, depending on what moves the work forward.',
  },
  cicd: {
    slug: 'cicd',
    title: 'CI/CD',
    description: 'Improve delivery speed and reliability with pipelines a team can maintain.',
    lead: 'Greenfield pipelines or rescue of flaky jobs — stages, secrets, promotion paths, and failure signals people actually use.',
    addresses: 'Slow or flaky delivery, opaque secrets, and pipelines nobody wants to touch.',
    includes: [
      'Introducing or maturing CI/CD (GitHub Actions, GitLab CI, Jenkins — the existing stack, not a forced rewrite)',
      'Stages, environments, promotion rules, and secrets/OIDC patterns that survive audits',
      'Speed and reliability: caching, parallelism, flaky tests, and failure signals people actually use',
      'Tying pipelines to IaC and Kubernetes without one-off snowflakes',
    ],
    engagement:
      'Short discovery, then concrete pipeline design or refactor with docs the team can run. Often pairs with IaC work or a health check.',
  },
  kubernetes: {
    slug: 'kubernetes',
    title: 'Kubernetes',
    description:
      'Operate Kubernetes and surrounding platform pieces with defaults and scaling behavior a team can predict.',
    lead: 'Bootstrap or harden clusters: networking, upgrades, autoscaling, and runbooks so on-call is not guessing why capacity moved.',
    addresses: 'Upgrade fear, opaque networking, and autoscaling that surprises on-call.',
    includes: [
      'Cluster setup, add-ons, upgrades, and platform defaults that fit the org',
      'Networking, ingress, workloads, namespaces, and guardrails',
      'Automated scaling: HPA/VPA, cluster autoscaler, Karpenter, and capacity planning',
      'Observability and runbooks so on-call is not guessing why nodes or pods moved',
    ],
    engagement:
      'Hands-on in repos, IaC, and cluster config — from bootstrap to tuning autoscaling. Outcome: a clear path from “it works” to “it scales predictably.”',
  },
  'custom-tooling': {
    slug: 'custom-tooling',
    title: 'Custom tooling',
    description:
      'Implementation and integration work: internal CLIs, glue, and small apps that bridge existing systems to the product path.',
    lead: 'Lightweight tools shaped to the stack — maintainable glue, not a competing product.',
    addresses:
      'Manual toil and missing bridges between Git, cloud, identity, and delivery systems.',
    includes: [
      'Internal CLIs and developer UX: flags, config, docs, and sensible defaults',
      'Glue around AWS, GCP, Kubernetes, and IaC APIs',
      'CI/CD hooks, release helpers, and wrappers that make the right path the easy path',
      'Handoff-friendly repos: tests where they matter, README the team will read',
    ],
    engagement:
      'Time-boxed build or a short spike plus a written next path. Implementation, pairing, or review of what already exists.',
    distinction:
      'This is integration work. It is not a fourth product and it does not replace Repave, Overpass, Toll, or Dispatch.',
  },
  'architecture-review': {
    slug: 'architecture-review',
    title: 'Architecture Review',
    description:
      'Stress-test large bets before they land — networking, clusters, and how changes reach production.',
    lead: 'A second opinion on tradeoffs, risks, and a recommended path from someone who has run the same patterns.',
    addresses: 'Irreversible platform bets made without a clear alternative or failure mode.',
    includes: [
      'Multi-account, networking, and ingress patterns',
      'EKS layout, security groups, and platform boundaries',
      'GitOps, pipelines, and how changes land in production',
      'Risks, alternatives, and a written recommendation',
    ],
    engagement:
      'One or two working sessions plus written notes. Useful before a large purchase, re-org, or hiring push.',
  },
  'fractional-advisor': {
    slug: 'fractional-advisor',
    title: 'Fractional Platform Advisor',
    description:
      'Ongoing architecture and engineering advisory on a bounded cadence — strategy, vendors, and operating decisions.',
    lead: 'Bounded hours: async or Slack on what is burning, RFC review, and hiring signal — useful, not ceremonial.',
    addresses:
      'Need for senior platform judgment without pretending OpsDevCode is a staffing firm.',
    includes: [
      'Slack or async check-ins on what is burning',
      'Review of RFCs, designs, and incident follow-ups',
      'Hiring support: what to look for in platform roles',
      'Flexible hours — not a standing meeting factory',
    ],
    engagement:
      'Retainer-style but bounded. Scope is agreed up front so the cadence stays useful, not ceremonial.',
  },
}

export function isServiceSlug(s: string): s is ServiceSlug {
  return (serviceSlugs as string[]).includes(s)
}
