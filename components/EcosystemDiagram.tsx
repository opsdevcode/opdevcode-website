import Link from 'next/link'
import { products } from '@/lib/products'

export default function EcosystemDiagram() {
  return (
    <figure className="eco-figure">
      <figcaption className="visually-hidden">
        Convergence informs OpsDevCode. Humans, automation, and agents express engineering intent
        into OpsDevCode. Repave owns delivery, Overpass owns infrastructure state, and Toll owns
        engineering economics. Dispatch is the governed experience across those domains. Domain
        products remain authoritative; Dispatch does not own their data.
      </figcaption>
      <div className="eco-diagram">
        <div className="eco-node eco-node--side">
          <span className="eco-kicker">Informs the model</span>
          <strong>Convergence</strong>
          <span>Independent body of knowledge</span>
        </div>
        <div className="eco-flow">
          <div className="eco-node eco-node--intent">
            <span className="eco-kicker">Engineering intent</span>
            <strong>Human · automation · agent</strong>
          </div>
          <div className="eco-arrow" />
          <div className="eco-node eco-node--company">
            <span className="eco-kicker">Company</span>
            <strong>OpsDevCode</strong>
            <span>Governed engineering domains</span>
          </div>
          <div className="eco-arrow" />
          <div className="eco-domains">
            {products
              .filter((p) => p.slug !== 'dispatch')
              .map((p) => (
                <Link key={p.slug} href={p.href} className={`eco-node eco-node--${p.slug}`}>
                  <strong>{p.name}</strong>
                  <span>{p.domain}</span>
                </Link>
              ))}
          </div>
          <div className="eco-arrow" />
          <Link href="/products/dispatch" className="eco-node eco-node--dispatch">
            <span className="eco-kicker">Experience across domains</span>
            <strong>Dispatch</strong>
            <span>Does not own the domain stores</span>
          </Link>
        </div>
      </div>
    </figure>
  )
}
