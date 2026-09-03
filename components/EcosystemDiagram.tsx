import Link from 'next/link'
import { products } from '@/lib/products'

export default function EcosystemDiagram({ compact }: { compact?: boolean }) {
  const domains = products.filter((p) => p.slug !== 'dispatch')
  return (
    <figure className={compact ? 'eco-figure eco-figure--compact' : 'eco-figure'}>
      <figcaption className="visually-hidden">
        Convergence informs OpsDevCode. Humans, automation, and agents express engineering intent
        into OpsDevCode. Repave owns delivery, Overpass owns infrastructure state, and Toll owns
        engineering economics. Dispatch is the governed experience across those domains. Domain
        products remain authoritative; Dispatch does not own their data.
      </figcaption>
      <div className="eco-diagram">
        <div className="eco-node eco-node--side">
          <span className="eco-kicker">Informs</span>
          <strong>Convergence</strong>
          <span>Independent knowledge</span>
        </div>
        <div className="eco-flow">
          <div className="eco-node eco-node--intent">
            <span className="eco-kicker">Intent</span>
            <strong>Human · automation · agent</strong>
          </div>
          <div className="eco-arrow" aria-hidden />
          <div className="eco-node eco-node--company">
            <span className="eco-kicker">Company</span>
            <strong>OpsDevCode</strong>
            <span>Governed domains</span>
          </div>
          <div className="eco-arrow" aria-hidden />
          <div className="eco-domains">
            {domains.map((p) => (
              <Link key={p.slug} href={p.href} className={`eco-node eco-node--${p.slug}`}>
                <strong>{p.name}</strong>
                <span>{p.domain}</span>
              </Link>
            ))}
          </div>
          <div className="eco-arrow" aria-hidden />
          <Link href="/products/dispatch" className="eco-node eco-node--dispatch">
            <span className="eco-kicker">Experience</span>
            <strong>Dispatch</strong>
            <span>Does not own domain stores</span>
          </Link>
        </div>
      </div>
    </figure>
  )
}
