/** Captured Mint CLI output. Not a second compiler. */

export const MINT_LAB_HREF = '/labs/mint'
export const CAPTURED_LABEL = 'Captured from mint CLI 0.8.0a2 / v0.8.0-alpha.2'

export const MINT_LAB = {
  slug: 'mint',
  number: 0,
  title: 'Compile and plan Mint offline',
  authority: 'Mint',
  authorityVerb: 'owns intent, MintIR, and the plan — not apply',
  summary:
    'Inspect check, MintIR, and plan artifacts captured from the public Mint compiler on local-marker. No TypeScript compiler. No mint apply.',
  href: MINT_LAB_HREF,
} as const

export const MINT_LAB_CAPTURE = {
  compiler: 'specmint 0.8.0a2',
  languageTag: 'v0.8.0-alpha.2',
  project: 'examples/projects/local-marker',
  capturedBy: 'mint CLI (not a TypeScript compiler)',
  versionLine: 'mint language v0 (specmint 0.8.0a2)',
  check: {
    digest: 'sha256:20a191b98c0cc869b129d65b0ae7b0203549ea9b8cabc5327cb4f98563e5f575',
    ok: true,
  },
  ir: {
    kind: 'MintIR',
    apiVersion: 'mint.opsdevcode.io/v0',
  },
  plan: {
    schema: 'mint.plan-result/v0',
    kind: 'MintPlanResult',
    ok: true,
  },
} as const
