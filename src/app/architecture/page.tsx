import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import SystemMap from '@/components/SystemMap'
import { PLATFORM_NAME } from '@/lib/platform'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Architecture',
  description:
    'OpsDevCode Platform is modular. Authority stays with Repave, Overpass, Toll, and Dispatch. SpecMint is the governed lifecycle runtime.',
  path: '/architecture',
})

export default function ArchitecturePage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Architecture</p>
        <h1 className="page-title">A modular platform. Authority stays with the products.</h1>
        <p className="lede">
          {PLATFORM_NAME} composes independently adoptable products. Decisions can share a shape.
          Stores, gates, and remediations do not move into one service. This is not a fifth product.
        </p>
        <SystemMap variant="policy" />
        <h2>What the company is, and is not</h2>
        <p>
          OpsDevCode is the company. {PLATFORM_NAME} is the offering. Mint names intent. SpecMint
          runs the governed lifecycle. SpecMint core is public; the hosted service stays private.
          Products remain Repave, Overpass, Toll, and Dispatch. Relay is delivery, not a fifth SKU.
        </p>
        <p>
          Relay is supporting conversational runtime consumed over a contract. It is not a public
          product and does not join the family marks.
        </p>
        <h2>Why the decision is shared</h2>
        <p>
          A repository change, an infrastructure reading, a cost constraint, and a delegated request
          are different authorities. They still need one explainable shape: what was asked, which
          facts were present, what the policy engine returned, and who acted. Sharing the decision
          contract does not move stores, gates, or remediations into one service.
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
        <p>Missing facts stay unknown. Unknown is not allow, deny, compliant, or noncompliant.</p>
        <h2>One public demonstration path</h2>
        <p>
          Mint names intent in Mint, Markdown, JSON, or YAML. SpecMint compiles that intent
          and federates product capability manifests. Capability
          <code>infrastructure.object-storage</code> routes to Overpass.
          Overpass returns a plan and result. Dispatch notifies. Relay carries the
          notification. Toll may be discovered and does not invent spend. Evidence cites
          tenant and environment identifiers only. Repave is optional. No provider is
          mutated. This is a lab demonstration, not a production-connected customer result.
        </p>
        <h2>Policy does not replace product workflows</h2>
        <p>
          The policy engine returns a structured decision. Repave still owns repository lifecycle.
          Overpass still owns custody. Toll still owns economic evidence. Dispatch still owns
          governed interaction. Obligations and required evidence are inputs to those workflows, not
          a substitute for them.
        </p>
        <h2>Exceptions are governed, not hidden</h2>
        <p>
          An explicit, time-bounded exception can produce a conditional decision with review
          obligations. It is recorded on the decision. It is not a silent bypass and not a second
          unpublished path around the owning product.
        </p>
        <p>
          In technical settings the first policy engine is Open Policy Agent. In product language it
          is a policy decision. That implementation can change without renaming the products.
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
