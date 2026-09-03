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
          The problem is not specialization. The problem is when specialization becomes the only way
          work can move.
        </p>
        <div className="section--split">
          <div>
            <h2>Intent through domains</h2>
            <p>
              Named domains for delivery, infrastructure state, and engineering economics. Each
              keeps its own authority: gates, evidence, and stores.
            </p>
          </div>
          <div>
            <h2>Experience is not ownership</h2>
            <p>
              Dispatch is how a human, automation, or agent can ask, propose, and sometimes act. It
              does not grade policy. Trust: Advisory, Supervisory, Autonomous — only where the
              domain already allows it.
            </p>
          </div>
        </div>
        <EcosystemDiagram />
        <div className="section--split" style={{ marginTop: 'var(--space-32)' }}>
          <div>
            <h2>Alignment, not ownership of the idea</h2>
            <p>
              Convergence is independent. OpsDevCode does not specify it, and Convergence is not
              required to use OpsDevCode products.{' '}
              <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
                Convergence on GitHub
              </a>
              .
            </p>
          </div>
          <p>
            <Link className="btn primary" href="/products">
              Products
            </Link>
          </p>
        </div>
      </section>
    </PageFrame>
  )
}
