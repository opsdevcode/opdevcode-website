import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import EcosystemDiagram from '@/components/EcosystemDiagram'
import { CONVERGENCE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How OpsDevCode designs engineering infrastructure so intent can move through governed domains instead of organizational silos.',
}

export default function ApproachPage() {
  return (
    <PageFrame>
      <section className="section">
        <h1 className="page-title">Approach</h1>
        <p className="lede">
          Modern software delivery is no longer performed only by engineers. The problem is not
          specialization. The problem is when specialization becomes the only way work can move.
        </p>
        <h2>Intent through domains</h2>
        <p>
          OpsDevCode builds named domains for delivery, infrastructure state, and engineering
          economics. Each domain keeps its own authority: gates, evidence, and stores. A change does
          not have to become a tour of teams and tickets to complete.
        </p>
        <h2>Experience is not ownership</h2>
        <p>
          Dispatch is how a human, automation, or agent can ask, propose, and sometimes act. It does
          not own the domains it touches. It does not grade policy. That boundary is the trust
          model: Advisory, Supervisory, Autonomous — with autonomy only where the domain already
          allows it.
        </p>
        <EcosystemDiagram />
        <h2>Alignment, not ownership of the idea</h2>
        <p>
          Convergence explores these questions as an independent body of knowledge. OpsDevCode does
          not specify Convergence, and Convergence is not required to use OpsDevCode products.{' '}
          <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
            Convergence on GitHub
          </a>
          .
        </p>
        <p style={{ marginTop: 'var(--space-32)' }}>
          <Link className="btn primary" href="/products">
            Products
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
