import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import SystemMap from '@/components/SystemMap'
import ConvergePair from '@/components/ConvergePair'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Approach',
  description:
    'How humans, automation, and agents express intent through governed products — with evidence, not org-chart routing.',
  path: '/approach',
})

export default function ApproachPage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Approach</p>
        <h1 className="page-title">Intent, governed work, evidence</h1>
        <p className="lede">
          Specialization is necessary. Making people or agents tour the org chart to complete one
          change is not. Policy-native delivery makes repeatable rules into explainable decisions
          without creating a fifth product.
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
            <h2>Who asks</h2>
            <p>A human, an automation, or an agent. Same engineering intent; different surfaces.</p>
          </li>
          <li>
            <span>02</span>
            <h2>What they ask for</h2>
            <p>
              Intent toward a domain product: delivery, infrastructure state, or economics. Dispatch
              can carry the conversation; it does not own the store.
            </p>
          </li>
          <li>
            <span>03</span>
            <h2>Where judgment lives</h2>
            <p>
              Repave, Overpass, and Toll keep gates, evidence, and stores. Dispatch can coordinate
              policy evaluation; it does not become the policy authority. Where a policy engine is
              used, Open Policy Agent may appear as implementation detail — not as the company
              category.
            </p>
          </li>
          <li>
            <span>04</span>
            <h2>What comes out</h2>
            <p>A governed change or a refusal — plus a record of what ran and why.</p>
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
