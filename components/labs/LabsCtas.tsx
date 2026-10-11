import Link from 'next/link'
import { CALENDLY_URL, REPAVE_EVALUATE_URL, REPAVE_PROOF_URL } from '@/lib/site'

export default function LabsCtas({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'labs-cta-block labs-cta-block--compact' : 'labs-cta-block'}>
      <p className={compact ? 'cta-row labs-cta-row' : 'cta labs-cta-row'}>
        <a
          className="btn primary"
          href={REPAVE_EVALUATE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request evaluation
        </a>
      </p>
      <p className="cta-follow">
        <Link href="/products">Compare products</Link>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          Request demo
        </a>
        {compact ? (
          <a href={REPAVE_PROOF_URL} target="_blank" rel="noopener noreferrer">
            View proof
          </a>
        ) : null}
      </p>
    </div>
  )
}
