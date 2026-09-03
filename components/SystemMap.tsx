import Link from 'next/link'

export default function SystemMap({ compact }: { compact?: boolean }) {
  return (
    <figure className={compact ? 'sysmap sysmap--compact' : 'sysmap'}>
      <figcaption className="visually-hidden">
        Humans, automation, and agents express engineering intent into OpsDevCode. Repave governs
        software delivery, Overpass understands infrastructure state, and Toll connects engineering
        decisions to economics. Dispatch is the governed intelligent experience across those
        products. It does not own their stores. Convergence is an independent body of knowledge that
        informs the design; it is not in the runtime path.
      </figcaption>
      <p className="sysmap-aside">
        Design informed by <span>Convergence</span>
        <small>Independent · not in the runtime path</small>
      </p>
      <div className="sysmap-actors" aria-hidden="true">
        <span>Human</span>
        <span>Automation</span>
        <span>Agent</span>
      </div>
      <svg className="sysmap-funnel" viewBox="0 0 300 28" aria-hidden="true">
        <path d="M50 2 L150 26 M150 2 L150 26 M250 2 L150 26" />
      </svg>
      <p className="sysmap-intent">Intent</p>
      <div className="sysmap-join sysmap-join--short" aria-hidden="true" />
      <div className="sysmap-frame">
        <p className="sysmap-company">OpsDevCode</p>
        <div className="sysmap-domains">
          <Link href="/products/repave">
            <strong>Repave</strong>
            <span>Delivery</span>
          </Link>
          <Link href="/products/overpass">
            <strong>Overpass</strong>
            <span>State</span>
          </Link>
          <Link href="/products/toll">
            <strong>Toll</strong>
            <span>Economics</span>
          </Link>
        </div>
        <Link href="/products/dispatch" className="sysmap-experience">
          <span>Governed experience</span>
          <strong>Dispatch</strong>
        </Link>
      </div>
    </figure>
  )
}
