import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import SystemMap from '@/components/SystemMap'
import ConvergePair from '@/components/ConvergePair'
import { GOVERN_LINE, OUTCOME_LINE, PLATFORM_NAME, VERIFY_LINE } from '@/lib/platform'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Approach',
  description:
    'Define the outcome, govern the change, and verify the result. Mint expresses intent. SpecMint runs the governed lifecycle.',
  path: '/approach',
})

export default function ApproachPage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Approach</p>
        <h1 className="page-title">
          {OUTCOME_LINE} {GOVERN_LINE} {VERIFY_LINE}
        </h1>
        <p className="lede">
          {PLATFORM_NAME} is how those three steps stay distinct. Humans, automation, and agents can
          express intent. Domain products still own gates, stores, and evidence.
        </p>
        <h2 className="section-title">How the work is designed</h2>
        <ol className="principle-rows">
          <li>
            <span>01 /</span>
            <div>
              <h2>Domain authority stays with the domain</h2>
              <p>Coordination does not transfer ownership.</p>
            </div>
          </li>
          <li>
            <span>02 /</span>
            <div>
              <h2>Integrate commodity. Own differentiation.</h2>
              <p>
                OpsDevCode integrates systems such as source control, cloud platforms,
                infrastructure engines, and observability rather than rebuilding them merely for
                ownership.
              </p>
            </div>
          </li>
          <li>
            <span>03 /</span>
            <div>
              <h2>Intent is not authority</h2>
              <p>Understanding an outcome does not automatically authorize its execution.</p>
            </div>
          </li>
          <li>
            <span>04 /</span>
            <div>
              <h2>State before automation</h2>
              <p>
                Reliable action depends on understanding what should be true and what is actually
                true.
              </p>
            </div>
          </li>
          <li>
            <span>05 /</span>
            <div>
              <h2>Evidence over assumption</h2>
              <p>
                Changes should produce enough evidence to determine what happened and whether the
                intended outcome occurred.
              </p>
            </div>
          </li>
        </ol>
        <ol className="approach-seq">
          <li>
            <span>01</span>
            <h2>Define the outcome</h2>
            <p>
              Mint is the public intent language and toolchain. It is how a requested change is
              named and compiled. It is not the customer result — domain products still own gates
              and evidence.
            </p>
          </li>
          <li>
            <span>02</span>
            <h2>Govern the change</h2>
            <p>
              SpecMint is the governed lifecycle runtime. SpecMint core is public; hosted execution
              stays private. Products still own their gates.
            </p>
          </li>
          <li>
            <span>03</span>
            <h2>Verify the result</h2>
            <p>A governed change or a refusal — plus a record of what ran and why.</p>
          </li>
          <li>
            <span>04</span>
            <h2>Who asks</h2>
            <p>
              A human, an automation, or an agent. Dispatch can carry the conversation. Relay is
              supporting conversational runtime, not a product in the family.
            </p>
          </li>
        </ol>
        <SystemMap variant="policy" />
        <SystemMap variant="family" />
        <div className="converge-follow">
          <ConvergePair />
        </div>
        <p style={{ marginTop: 'var(--space-32)' }}>
          <Link className="btn primary" href="/products">
            Products
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
