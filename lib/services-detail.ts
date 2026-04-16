/** Content for /services/[slug] detail pages (static export). */

export type ServiceSlug =
  | 'platform-health'
  | 'finops'
  | 'terraform'
  | 'kubernetes'
  | 'architecture-review'
  | 'fractional-advisor'

export const serviceSlugs: ServiceSlug[] = [
  'platform-health',
  'finops',
  'terraform',
  'kubernetes',
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
      'Straight-up report on your AWS, GCP, EKS, and Terraform — what is working, what is not, and what to fix first.',
    lead: 'I dig into your stack with read-first access and deliver a prioritized report you can act on.',
    bulletsLeft: [
      'AWS and GCP account structure, billing signals, and obvious waste',
      'EKS clusters, node groups, add-ons, and upgrade posture',
      'Terraform layout, state, modules, and CI/CD around applies',
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
      'Cloud financial operations: visibility into what drives spend, disciplined allocation, and engineering changes that actually lower the bill.',
    lead: 'We align cost with how workloads really run — tagging, chargeback/showback signals, and infra changes — without spreadsheet theater.',
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
  terraform: {
    slug: 'terraform',
    title: 'Terraform Cleanup',
    description:
      'Refactor IaC for maintainability: clearer structure, safer workflows, less "hold your breath" on every apply.',
    lead: 'Make Terraform boring again — predictable plans, sensible modules, and ownership that your team understands.',
    bulletsLeft: [
      'Module boundaries, naming, and dependency direction',
      'State layout, workspaces, and remote state hygiene',
      'CI gates, plan policies, and safer promotion paths',
      'Pairing with your team so the cleanup survives',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Scoped refactors with PR-sized steps. I can lead the refactor or pair — whichever gets you stable faster.',
  },
  kubernetes: {
    slug: 'kubernetes',
    title: 'Kubernetes',
    description:
      'End-to-end Kubernetes help — from cluster setup and day-two operations through autoscaling that matches how you run workloads.',
    lead: 'Whether you are standing up EKS (or tightening an existing one), I focus on a cluster your team can operate and that scales without surprises.',
    bulletsLeft: [
      'Cluster setup, add-ons, upgrades, and platform defaults that fit your org',
      'Networking, ingress, workloads, namespaces, and guardrails',
      'Automated scaling: HPA/VPA, cluster autoscaler, Karpenter, and capacity planning',
      'Observability and runbooks so on-call is not guessing why nodes or pods moved',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Hands-on in your repos, Terraform, and cluster config — from bootstrap to tuning autoscaling. Outcome: a clear path from “it works” to “it scales predictably.”',
  },
  'architecture-review': {
    slug: 'architecture-review',
    title: 'Architecture Review',
    description:
      'Before you lock in big decisions — networking, cluster layout, guardrails — I will sanity-check the plan.',
    lead: 'A second pair of eyes from someone who has shipped the same patterns in production.',
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
      'A few hours a week of senior guidance for your CTO or platform lead. No hiring required.',
    lead: 'Stay unblocked on strategy, vendor choices, and team direction without a full-time hire.',
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
