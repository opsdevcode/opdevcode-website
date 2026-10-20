import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import LabsAnalytics from '@/components/labs/LabsAnalytics'
import LabsCtas from '@/components/labs/LabsCtas'
import {
  REPAVE_EVAL_ENGINE_SHA,
  REPAVE_EVAL_ENGINE_VERSION,
  REPAVE_EVAL_GATES,
  REPAVE_EVAL_HREF,
  REPAVE_EVAL_RECORDED_AT,
  REPAVE_EVAL_SCENARIO,
  REPAVE_EVAL_TRANSCRIPT,
  REPAVE_PROOF_ANCHOR,
} from '@/lib/repave-evaluation'
import { pageMeta } from '@/lib/seo'
import { REPAVE_EVALUATE_URL, REPAVE_PROOF_URL } from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = pageMeta({
  title: 'Recorded Repave evaluation',
  description:
    'Recorded observe-and-plan evaluation of an OpsDevCode-owned brownfield Terraform fixture. Observation completed is not governance.',
  path: REPAVE_EVAL_HREF,
})

export default function RepaveEvaluationPage() {
  const proofHref = `${REPAVE_PROOF_URL}${REPAVE_PROOF_ANCHOR}`
  return (
    <PageFrame>
      <LabsAnalytics recordedProof />
      <section className="section labs-hub">
        <p className="rail-label">Labs · recorded evidence</p>
        <h1 className="page-title">Successful automation is not the intended outcome</h1>
        <p className="lede">
          This page is recorded output from Repave, the repository lifecycle product. It is not a
          simulated Environment V1 lab, not a customer case, and not live cloud observation.
        </p>
        <p className="lab-sim-banner" role="status">
          Recorded evaluation {REPAVE_EVAL_SCENARIO}. Plan only. No apply, push, or pull request.
        </p>
        <h2>Observation</h2>
        <p>
          Observation completed successfully. Governed: no. Status: unknown — not drift and not
          compliance. <code>repave.yaml</code> was missing.
        </p>
        <h2>Planning</h2>
        <p>
          Blueprint detection tied at 50% / 50%. Import required an explicit
          <code> terraform-module-generic</code> selection. A plan was generated. Gates did not
          pass.
        </p>
        <ul className="eval-gate-legend" aria-label="Recorded gate counts">
          <li className="eval-gate eval-gate--pass">PASS {REPAVE_EVAL_GATES.PASS}</li>
          <li className="eval-gate eval-gate--fail">FAIL {REPAVE_EVAL_GATES.FAIL}</li>
          <li className="eval-gate eval-gate--skip">SKIP {REPAVE_EVAL_GATES.SKIP}</li>
          <li className="eval-gate eval-gate--neutral">WAIVED {REPAVE_EVAL_GATES.WAIVED}</li>
          <li className="eval-gate eval-gate--neutral">TIMEOUT {REPAVE_EVAL_GATES.TIMEOUT}</li>
        </ul>
        <h2>Evidence</h2>
        <p>
          Git HEAD, tree, and working copy were unchanged. No apply. No push. No pull request.
          Engine {REPAVE_EVAL_ENGINE_VERSION} at <code>{REPAVE_EVAL_ENGINE_SHA.slice(0, 12)}</code>,
          recorded {REPAVE_EVAL_RECORDED_AT}.
        </p>
        <pre className="eval-transcript" tabIndex={0} aria-label="Sanitized CLI transcript">
          {REPAVE_EVAL_TRANSCRIPT}
        </pre>
        <figure className="eval-visual">
          <Image
            src="/media/gtm-009a-linkedin.svg"
            width={390}
            height={488}
            alt="Recorded Repave evaluation: observation completed, governed no, status unknown; plan generated with 1 pass, 1 fail, 8 skip; no git changes, no apply."
          />
          <figcaption>
            Technical summary of the recorded CLI result. FAIL is not shown as pass. SKIP is muted.
          </figcaption>
        </figure>
        <p className="cta-row">
          <a className="btn primary" href={proofHref} rel="noopener noreferrer">
            Open Repave product proof
          </a>
          <a className="btn" href={REPAVE_EVALUATE_URL} rel="noopener noreferrer">
            Request a founder-assisted evaluation
          </a>
        </p>
        <p className="cta-follow">
          <Link href="/labs">All labs</Link>
          <Link href="/products">Products</Link>
        </p>
        <LabsCtas />
      </section>
    </PageFrame>
  )
}
