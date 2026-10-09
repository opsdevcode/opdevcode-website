import Link from 'next/link'
import { CALENDLY_URL, PRODUCT_URLS, REPAVE_EVALUATE_URL, REPAVE_PROOF_URL } from '@/lib/site'

export default function LabsCtas({ compact = false }: { compact?: boolean }) {
  return (
    <p className={compact ? 'cta-row labs-cta-row' : 'cta labs-cta-row'}>
      <Link className="btn primary" href="/products">
        Explore products
      </Link>
      <a className="btn" href={REPAVE_EVALUATE_URL} target="_blank" rel="noopener noreferrer">
        Request evaluation
      </a>
      <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
        Request demo
      </a>
      <a className="btn" href={REPAVE_PROOF_URL} target="_blank" rel="noopener noreferrer">
        View proof
      </a>
      <a className="btn" href={PRODUCT_URLS.repave} target="_blank" rel="noopener noreferrer">
        Repave
      </a>
    </p>
  )
}
