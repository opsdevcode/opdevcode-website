/** Content for /services/[slug] detail pages (static export). */

export type ServiceSlug =
  | 'platform-health'
  | 'cost-scaling'
  | 'terraform'
  | 'karpenter'
  | 'architecture-review'
  | 'fractional-advisor'

export const serviceSlugs: ServiceSlug[] = [
  'platform-health',
  'cost-scaling',
  'terraform',
  'karpenter',
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
  'cost-scaling': {
    slug: 'cost-scaling',
    title: 'Cost + Scaling',
    description:
      'Track down what is driving your bill — compute waste, node strategy, autoscaling — and fix it.',
    lead: 'We align spend with how you actually run workloads, without guessing from dashboards alone.',
    bulletsLeft: [
      'Right-sizing instances, savings plans, and idle capacity',
      'EKS node strategy, consolidation, and autoscaling behavior',
      'Karpenter or cluster autoscaler tuning where it matters',
      'Clear before/after targets so you know the win',
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
  karpenter: {
    slug: 'karpenter',
    title: 'Karpenter + Node Strategy',
    description:
      'Node provisioning and consolidation that behaves predictably and does not blow the budget.',
    lead: 'Karpenter is powerful when configured intentionally — otherwise it is surprise bills and thrashy nodes.',
    bulletsLeft: [
      'NodePool / provisioner design for your workload mix',
      'Consolidation, disruption, and interruption budgets',
      'Spot vs on-demand strategy and blast radius',
      'Observability so you can explain behavior to finance',
    ],
    rightTitle: 'Typical engagement',
    rightBody:
      'Hands-on in your repos and cluster config. Outcome: predictable scale-down, fewer orphaned nodes, and cost you can reason about.',
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
