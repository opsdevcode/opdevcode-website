/** Recorded GTM-009A evidence. Not simulated. Not a customer case. */

export const REPAVE_EVAL_HREF = '/labs/repave-evaluation'
export const REPAVE_EVAL_SCENARIO = 'gtm-009a-v1'
export const REPAVE_EVAL_ENGINE_SHA = '7b993851d94fff050777ccc34813aadde494ce8d'
export const REPAVE_EVAL_ENGINE_VERSION = '3.158.2'
export const REPAVE_EVAL_RECORDED_AT = '2026-10-19T13:00:25Z'
export const REPAVE_PROOF_ANCHOR = '#gtm-009a'

export const REPAVE_EVAL_GATES = {
  PASS: 1,
  FAIL: 1,
  SKIP: 8,
  WAIVED: 0,
  TIMEOUT: 0,
} as const

export const REPAVE_EVAL_TRANSCRIPT = `scenario: gtm-009a-v1
observation.completed: yes
governed: no
status: unknown
unknown_is_not: drift | compliance
detection: ambiguous — terraform-module-generic 50%, terraform-module-resource 50%
blueprint: terraform-module-generic@0.12.0 (explicit)
plan.generated: yes
gates_passed: false
gates: PASS=1 FAIL=1 SKIP=8 WAIVED=0 TIMEOUT=0
  SKIP terraform-fmt: terraform not available; skipped
  SKIP terraform-validate: terraform not available; skipped
  SKIP terraform-test: terraform not available; skipped
  SKIP tflint: tflint not installed; skipped
  SKIP checkov: checkov not installed; skipped
  SKIP infracost: terraform not available; skipped
  SKIP secrets: checkov not installed; skipped
  SKIP opa: conftest not installed; skipped
  FAIL docs-drift: README missing Usage section
  PASS provenance-drift: Provenance file present and valid
apply: not requested
push: not requested
pull_request: not opened
target_mutated: false`
