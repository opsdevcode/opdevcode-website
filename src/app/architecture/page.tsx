import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import SystemMap from '@/components/SystemMap'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Architecture',
  description:
    'Why OpsDevCode shares explainable decisions while authority stays with Repave, Overpass, Toll, and Dispatch.',
  path: '/architecture',
})

export default function ArchitecturePage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Architecture</p>
        <h1 className="page-title">Decisions are shared. Authority is not.</h1>
        <p className="lede">
          Policy-native delivery means every consequential action can be governed by policy, but
          not every part of the platform is implemented as policy. The decision plane connects
          intent to product capabilities. It is not a fifth product.
        </p>
        <SystemMap variant="policy" />
        <h2>Why the decision is shared</h2>
        <p>
          A repository change, an infrastructure reading, a cost constraint, and a delegated
          request are different authorities. They still need one explainable shape: what was
          asked, which facts were present, what the policy engine returned, and who acted. Sharing
          the decision contract does not move stores, gates, or remediations into one service.
        </p>
        <h2>What contributes to a decision</h2>
        <ul>
          <li>
            <strong>Declared state</strong> — what a product already recorded as desired or
            approved, such as a Repave baseline.
          </li>
          <li>
            <strong>Observed state</strong> — what Overpass can say from accepted infrastructure
            snapshots and dependency edges, when those facts exist.
          </li>
          <li>
            <strong>Economic context</strong> — attributed spend and thresholds Toll can support,
            without claiming live enforcement.
          </li>
          <li>
            <strong>Delegation</strong> — who or what Dispatch exposed, and at what confirmation
            boundary.
          </li>
        </ul>
        <p>
          Missing facts stay unknown. Unknown is not allow, deny, compliant, or noncompliant.
        </p>
        <h2>Policy does not replace product workflows</h2>
        <p>
          The policy engine returns a structured decision. Repave still owns repository
          lifecycle. Overpass still owns custody. Toll still owns economic evidence. Dispatch
          still owns governed interaction. Obligations and required evidence are inputs to those
          workflows, not a substitute for them.
        </p>
        <h2>Exceptions are governed, not hidden</h2>
        <p>
          An explicit, time-bounded exception can produce a conditional decision with review
          obligations. It is recorded on the decision. It is not a silent bypass and not a
          second unpublished path around the owning product.
        </p>
        <p>
          In technical settings the first policy engine is Open Policy Agent. In product language
          it is a policy decision. That implementation can change without renaming the products.
        </p>
        <p className="cta-row">
          <Link className="btn primary" href="/products">
            Products
          </Link>
          <Link className="btn" href="/approach">
            Approach
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
