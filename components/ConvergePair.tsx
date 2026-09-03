import { CONVERGENCE_URL } from '@/lib/site'

export default function ConvergePair() {
  return (
    <div className="converge-pair">
      <div>
        <p className="rail-label">Method</p>
        <h3>Convergence</h3>
        <p>Independent body of knowledge. Not an OpsDevCode product, spec, or runtime.</p>
        <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>
      <p className="converge-pair-verb" aria-hidden="true">
        informs
      </p>
      <div>
        <p className="rail-label">Company</p>
        <h3>OpsDevCode</h3>
        <p>Commercial systems designed in alignment with those principles.</p>
      </div>
    </div>
  )
}
