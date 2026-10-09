/** Deterministic simulated Environment V1 labs. Not product evidence. */

export const LAB_SLUGS = ['create', 'observe', 'reclaim'] as const
export type LabSlug = (typeof LAB_SLUGS)[number]
export type LabSurface = LabSlug | 'mint'

export const CLOUD_PROVIDERS = ['aws', 'azure', 'gcp'] as const
export type CloudProvider = (typeof CLOUD_PROVIDERS)[number]

export const ORG_ENGINES = ['terraform', 'pulumi'] as const
export type OrgEngine = (typeof ORG_ENGINES)[number]

export const SIMULATED_LABEL = 'Simulated lab data'
export const SIMULATED_TENANT = 'tenant-lab-simulated'
export const SIMULATED_BUDGET_USD = 500
export const SIMULATED_SPEND_USD = 612
export const SIMULATED_TTL_DAYS = [7, 14, 30] as const

export type VerificationStatus = 'VERIFICATION_PENDING' | 'VERIFIED' | 'NOT_VERIFIED'
export type Freshness = 'present' | 'absent' | 'unknown' | 'stale'
export type ObservationScenario = 'present' | 'stale' | 'absent' | 'address_as_id'
export type ReclaimScenario = 'leftover' | 'verified_empty' | 'no_digest'

export type Authority = 'Repave' | 'Overpass' | 'Toll' | 'Dispatch'

export type LabMeta = {
  slug: LabSlug
  number: 1 | 2 | 3
  title: string
  authority: Authority
  authorityVerb: string
  summary: string
  href: string
}

export const LABS: readonly LabMeta[] = [
  {
    slug: 'create',
    number: 1,
    title: 'Create a governed environment',
    authority: 'Repave',
    authorityVerb: 'owns mint, GitOps intent, and verification status',
    summary:
      'Choose AWS, Azure, or GCP. Record object-storage and queue, TTL, and budget. Realization ends VERIFICATION_PENDING.',
    href: '/labs/create',
  },
  {
    slug: 'observe',
    number: 2,
    title: 'Observe actual infrastructure',
    authority: 'Overpass',
    authorityVerb: 'owns the observation citation',
    summary:
      'Compare approved IaC with a posted Overpass citation. Native IDs are not Terraform addresses.',
    href: '/labs/observe',
  },
  {
    slug: 'reclaim',
    number: 3,
    title: 'Economics and reclaim',
    authority: 'Toll',
    authorityVerb: 'owns economic evidence; Repave records REQUEST_RECLAIM',
    summary:
      'Budget, spend with digest, leftover_estate, and REQUEST_RECLAIM. Reclaim is not destroy.',
    href: '/labs/reclaim',
  },
]

export type SimulatedCloud = {
  provider: CloudProvider
  label: string
  environmentId: string
  stackName: string
  objectStorageKind: string
  queueKind: string
  objectStorageId: string
  queueId: string
  terraform: string
  pulumi: string
}

export const SIMULATED_CLOUDS: Record<CloudProvider, SimulatedCloud> = {
  aws: {
    provider: 'aws',
    label: 'AWS',
    environmentId: 'env-aws-lab-sandbox-01',
    stackName: 'lab-sandbox-01',
    objectStorageKind: 'aws_s3_bucket',
    queueKind: 'aws_sqs_queue',
    objectStorageId: 'arn:aws:s3:::lab-sim-bucket-01',
    queueId: 'https://sqs.us-east-1.amazonaws.com/000000000000/lab-sim-queue-01',
    terraform: `resource "aws_s3_bucket" "lab" {
  bucket = "lab-sim-bucket-01"
}

resource "aws_sqs_queue" "lab" {
  name = "lab-sim-queue-01"
}`,
    pulumi: `const bucket = new aws.s3.Bucket("lab", { bucket: "lab-sim-bucket-01" })
const queue = new aws.sqs.Queue("lab", { name: "lab-sim-queue-01" })`,
  },
  azure: {
    provider: 'azure',
    label: 'Azure',
    environmentId: 'env-azure-lab-sandbox-01',
    stackName: 'lab-sandbox-01',
    objectStorageKind: 'azurerm_storage_account',
    queueKind: 'azurerm_servicebus_queue',
    objectStorageId:
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/lab-sim/providers/Microsoft.Storage/storageAccounts/labsimsa01',
    queueId:
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/lab-sim/providers/Microsoft.ServiceBus/namespaces/lab-sim-sb/queues/lab-sim-queue-01',
    terraform: `resource "azurerm_storage_account" "lab" {
  name                     = "labsimsa01"
  resource_group_name      = "lab-sim"
  location                 = "eastus"
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_servicebus_queue" "lab" {
  name         = "lab-sim-queue-01"
  namespace_id = azurerm_servicebus_namespace.lab.id
}`,
    pulumi: `const sa = new azure.storage.Account("lab", { name: "labsimsa01" })
const q = new azure.servicebus.Queue("lab", { name: "lab-sim-queue-01" })`,
  },
  gcp: {
    provider: 'gcp',
    label: 'GCP',
    environmentId: 'env-gcp-lab-sandbox-01',
    stackName: 'lab-sandbox-01',
    objectStorageKind: 'google_storage_bucket',
    queueKind: 'google_pubsub_topic',
    objectStorageId: '//storage.googleapis.com/lab-sim-bucket-01',
    queueId: '//pubsub.googleapis.com/projects/lab-sim/topics/lab-sim-topic-01',
    terraform: `resource "google_storage_bucket" "lab" {
  name     = "lab-sim-bucket-01"
  location = "US"
}

resource "google_pubsub_topic" "lab" {
  name = "lab-sim-topic-01"
}`,
    pulumi: `const bucket = new gcp.storage.Bucket("lab", { name: "lab-sim-bucket-01" })
const topic = new gcp.pubsub.Topic("lab", { name: "lab-sim-topic-01" })`,
  },
}

export const SIMULATED_DIGEST = 'a3f1c8e2b4d0567890abcdef1234567890abcdef1234567890abcdef12345678'

export function labBySlug(slug: string): LabMeta | undefined {
  return LABS.find((lab) => lab.slug === slug)
}

export function isLabSlug(value: string): value is LabSlug {
  return (LAB_SLUGS as readonly string[]).includes(value)
}

export function observeOutcome(scenario: ObservationScenario): {
  freshness: Freshness
  status: VerificationStatus
  resourceIds: string[]
  note: string
} {
  if (scenario === 'present') {
    return {
      freshness: 'present',
      status: 'VERIFIED',
      resourceIds: [],
      note: 'Posted citation is present, bound, and uses native resource IDs. Executed is already true; verified is now true.',
    }
  }
  if (scenario === 'stale') {
    return {
      freshness: 'stale',
      status: 'VERIFICATION_PENDING',
      resourceIds: [],
      note: 'Overpass freshness is stale. Repave does not invent a newer inventory. Status stays VERIFICATION_PENDING.',
    }
  }
  if (scenario === 'absent') {
    return {
      freshness: 'absent',
      status: 'VERIFICATION_PENDING',
      resourceIds: [],
      note: 'No bound observation. Missing is not false. Status stays VERIFICATION_PENDING.',
    }
  }
  return {
    freshness: 'present',
    status: 'NOT_VERIFIED',
    resourceIds: ['aws_s3_bucket.lab', 'module.env.aws_sqs_queue.lab'],
    note: 'Terraform addresses are not native IDs. IaC is approved intent, not observed cloud.',
  }
}

export function reclaimOutcome(scenario: ReclaimScenario): {
  kind: 'leftover_estate' | 'over_auto_budget' | 'in_budget'
  showDollars: boolean
  intent: 'REQUEST_RECLAIM' | 'none'
  leftover: boolean
  verifiedReclaim: boolean
  note: string
} {
  if (scenario === 'no_digest') {
    return {
      kind: 'over_auto_budget',
      showDollars: false,
      intent: 'none',
      leftover: false,
      verifiedReclaim: false,
      note: 'Totals without digest are omitted. No REQUEST_RECLAIM. Never show $0 as a substitute.',
    }
  }
  if (scenario === 'verified_empty') {
    return {
      kind: 'leftover_estate',
      showDollars: true,
      intent: 'REQUEST_RECLAIM',
      leftover: false,
      verifiedReclaim: true,
      note: 'REQUEST_RECLAIM was recorded. Verified reclaim requires a present citation with resource_count=0. This lab did not destroy infrastructure.',
    }
  }
  return {
    kind: 'leftover_estate',
    showDollars: true,
    intent: 'REQUEST_RECLAIM',
    leftover: true,
    verifiedReclaim: false,
    note: 'Observation is present with leftover native IDs. Finalize stays blocked. REQUEST_RECLAIM is intent, not destroy.',
  }
}
