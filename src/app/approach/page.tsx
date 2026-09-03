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
          change is not.
        </p>
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
              Repave, Overpass, and Toll keep gates, evidence, and stores. Dispatch does not grade
              policy.
            </p>
          </li>
          <li>
            <span>04</span>
            <h2>What comes out</h2>
            <p>A governed change or a refusal — plus a record of what ran and why.</p>
          </li>
        </ol>
        <SystemMap />
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
