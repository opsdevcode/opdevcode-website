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
  bulletsLeft: string[]
  rightTitle: string
  rightBody: string
}

export const servicesBySlug: Record<ServiceSlug, ServiceDetail> = {
  'platform-health': {
    slug: 'platform-health',
    title: 'Platform Health Check',
    description:
      'Find bottlenecks, risks, and unnecessary complexity in your platform, with clear next steps to improve it.',
    lead:
      'Read-first pass across AWS, GCP, EKS, and IaC — prioritized findings you can hand to leadership or your team and execute.',
    bulletsLeft: [
      'AWS and GCP account structure, billing signals, and obvious waste',
      'EKS clusters, node groups, add-ons, and upgrade posture',
      'IaC touchpoints: Terraform, Pulumi, or Crossplane — layout, state, and how changes land in CI',
      'Written findings plus a short call to walk through priorities',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Usually a few days of discovery, then a deliverable you can hand to leadership or your team. Time-boxed — no open-ended audit.',
  },
  finops: {
    slug: 'finops',
    title: 'FinOps',
    description:
      'Reduce cloud spend and improve visibility into where your infrastructure budget is going.',
    lead:
      'Align billing and usage with how workloads actually run — tagging, allocation, and infra changes engineering and finance can agree on.',
    bulletsLeft: [
      'Billing and usage signals: accounts, SKUs, savings plans, and idle capacity',
      'EKS and compute: node strategy, consolidation, and autoscaling behavior',
      'Kubernetes autoscaling and node behavior where it matters',
      'Clear before/after targets so finance and engineering share the same picture',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Often pairs well with a health check. I focus on changes that stick — not one-off console tweaks you forget next quarter.',
  },
  iac: {
    slug: 'iac',
    title: 'IaC',
    description:
      'Clean up and standardize infrastructure as code so your team can move faster with less risk.',
    lead:
      'Terraform, Pulumi, or Crossplane — tighten layout, state, and how changes land in CI so applies are predictable and owned.',
    bulletsLeft: [
      'Terraform: modules, naming, dependency direction, state and workspaces, plan/apply hygiene, and policy gates where they earn their keep',
      'Pulumi: stacks and components, testing, and language-native patterns your team can sustain day to day',
      'Crossplane: compositions, claims, provider configs, and keeping the control plane healthy through upgrades',
      'CI integration, promotion paths, and pairing so improvements survive the next hire cycle',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Scoped refactors or greenfield guardrails — PR-sized steps, clear owners, and docs people use. I can lead, pair, or review — whatever ships the outcome fastest.',
  },
  cicd: {
    slug: 'cicd',
    title: 'CI/CD',
    description:
      'Improve delivery speed and reliability with simpler pipelines your team can actually maintain.',
    lead:
      'Greenfield pipelines or rescue of flaky jobs — stages, secrets, promotion paths, and failure signals your team will actually use.',
    bulletsLeft: [
      'Introducing or maturing CI/CD (GitHub Actions, GitLab CI, Jenkins — your stack, not a forced rewrite)',
      'Stages, environments, promotion rules, and secrets/OIDC patterns that survive audits',
      'Speed and reliability: caching, parallelism, flaky tests, and failure signals people actually use',
      'Tying pipelines to IaC and Kubernetes (Terraform, Pulumi, etc.) without one-off snowflakes',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Short discovery, then concrete pipeline design or refactor with docs your team can run. Often pairs well with IaC work or a health check.',
  },
  kubernetes: {
    slug: 'kubernetes',
    title: 'Kubernetes',
    description:
      'Operate EKS and surrounding platform pieces with defaults and scaling behavior your team can predict — not fight.',
    lead:
      'Bootstrap or harden clusters: networking, upgrades, autoscaling, and runbooks so on-call is not guessing why capacity moved.',
    bulletsLeft: [
      'Cluster setup, add-ons, upgrades, and platform defaults that fit your org',
      'Networking, ingress, workloads, namespaces, and guardrails',
      'Automated scaling: HPA/VPA, cluster autoscaler, Karpenter, and capacity planning',
      'Observability and runbooks so on-call is not guessing why nodes or pods moved',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Hands-on in your repos, IaC, and cluster config — from bootstrap to tuning autoscaling. Outcome: a clear path from “it works” to “it scales predictably.”',
  },
  'custom-tooling': {
    slug: 'custom-tooling',
    title: 'Custom tooling',
    description:
      'Build lightweight internal tools that remove friction and automate repetitive work.',
    lead:
      'Internal CLIs, glue, and small apps shaped to your stack — ship something maintainable, not a science project.',
    bulletsLeft: [
      'Internal CLIs and developer UX: flags, config, docs, and sensible defaults',
      'Glue around AWS, GCP, Kubernetes, and your IaC APIs — the boring stuff that saves hours',
      'CI/CD hooks, release helpers, and “make the right thing easy” wrappers',
      'Handoff-friendly repos: tests where they matter, README your team will read',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Time-boxed build or a short spike plus roadmap. You choose: I ship a first version, we pair, or I review what you have and harden it.',
  },
  'architecture-review': {
    slug: 'architecture-review',
    title: 'Architecture Review',
    description:
      'Stress-test big bets before you commit — networking, clusters, and how changes reach production.',
    lead:
      'A second opinion from someone who has run the same patterns: tradeoffs, risks, and what I would do in your shoes.',
    bulletsLeft: [
      'Multi-account, networking, and ingress patterns',
      'EKS layout, security groups, and platform boundaries',
      'GitOps, pipelines, and how changes land in prod',
      'Risks, alternatives, and what I would do in your shoes',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'One or two working sessions plus written notes. Good before a big purchase, re-org, or hiring push.',
  },
  'fractional-advisor': {
    slug: 'fractional-advisor',
    title: 'Fractional Platform Advisor',
    description:
      'Senior platform judgment on a fixed cadence — strategy, vendors, and team direction without a full-time hire.',
    lead:
      'Bounded hours: async or Slack on what is burning, RFC review, and hiring signal — useful, not ceremonial.',
    bulletsLeft: [
      'Slack or async check-ins on what is burning',
      'Review of RFCs, designs, and incident follow-ups',
      'Hiring support: what to look for in platform roles',
      'Flexible hours — not a standing meeting factory',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Retainer-style but bounded. We agree scope up front so it stays useful, not ceremonial.',
  },
}

export function isServiceSlug(s: string): s is ServiceSlug {
  return (serviceSlugs as string[]).includes(s)
}
