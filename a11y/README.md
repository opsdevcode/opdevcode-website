# Accessibility gate (marketing)

Reusable axe-core + Playwright checks for the OpsDevCode company site (`opsdevco.de`). Portal surfaces are out of scope.

## Local

```bash
npm install
npx playwright install chromium
npm run build
# Full suite against the merge base (example):
A11Y_BASE_REF=origin/main npm run test:a11y
# Or force the marketing suite regardless of changed files:
npm run test:a11y:force
# Prove the gate fails on a deliberate inaccessible page:
npm run test:a11y:fixture
```

Detector only:

```bash
A11Y_BASE_REF=origin/main npm run test:a11y:detect
```

Unit tests for the change detector (no browser):

```bash
npm test
```

Browser fixture proof (optional locally):

```bash
A11Y_SKIP_BROWSER=0 node --test tests/a11y-fixture-gate.test.mjs
```

## Mapping

[`ui-impact-map.json`](ui-impact-map.json) maps UI-affecting path globs to routes and states (`default`, `menu-open`). Edit the map when routes or path ownership change.

| Impact      | Behavior                                                        |
| ----------- | --------------------------------------------------------------- |
| `marketing` | Build `out/`, scan mapped routes at desktop + mobile            |
| `none`      | Skip browsers; print `Not applicable — no UI-affecting changes` |
| unknown     | `conservative_run` (never silent skip) or `fail_detection`      |

## Artifacts

Written under `a11y-results/` (gitignored):

- `summary.json` — commit, tool versions, `testsRun`, `mergeBlockingVerified`
- `detection.json` — changed-file classification
- `runs/*.json` — per route / state / viewport (sanitized)
- `fixture-gate.json` — deliberate inaccessible fixture proof

`testsRun: true` means axe scanned pages. `mergeBlockingVerified: true` means zero axe **violations** on those scans. Incomplete (inconclusive) findings are retained for manual review and do not fail the gate.

## CI

The `a11y` job in [`.github/workflows/quality.yml`](../.github/workflows/quality.yml) always runs (no workflow `paths` filters). Non-UI diffs complete the job with the not-applicable message and upload artifacts; they do not leave the check pending.
