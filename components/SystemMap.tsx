export default function SystemMap({ compact }: { compact?: boolean }) {
  return (
    <figure className={compact ? 'sysmap sysmap--compact' : 'sysmap'}>
      <figcaption className="visually-hidden">
        OpsDevCode is a governed section through an engineering system. Repave reads delivery,
        Overpass reads state, Toll reads economics, and Dispatch reads interaction. The products are
        planes on one cut, not a required sequence. Convergence informs design and is not in the
        runtime path.
      </figcaption>
      <svg className="sysmap-section" viewBox="0 0 640 400" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
          <path d="M40 40 H600 V360 H40 Z" />
        </g>
        <rect className="sysmap-bed sysmap-bed--repave" x="184" y="112" width="110" height="92" />
        <rect className="sysmap-bed sysmap-bed--overpass" x="344" y="112" width="130" height="92" />
        <rect className="sysmap-bed sysmap-bed--toll" x="184" y="214" width="140" height="72" />
        <rect className="sysmap-bed sysmap-bed--dispatch" x="344" y="214" width="140" height="72" />
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M80 120 V80 H160" />
          <path d="M480 80 H560 V120" />
          <path d="M560 280 V320 H480" />
          <path d="M160 320 H80 V280" />
        </g>
        <text className="sysmap-svg-kicker" x="320" y="54" textAnchor="middle">
          OPSDEVCODE
        </text>
        <text className="sysmap-svg-note" x="320" y="72" textAnchor="middle">
          governed section · not a pipeline
        </text>
        <g className="sysmap-plane sysmap-plane--repave">
          <path d="M200 148 H280" />
          <path d="M200 168 H250" />
          <path d="M230 188 H280" />
          <path d="M200 148 V168" />
          <path d="M280 168 V188" />
        </g>
        <text className="sysmap-label sysmap-label--repave" x="200" y="136">
          Repave · delivery
        </text>
        <g className="sysmap-plane sysmap-plane--overpass">
          <path d="M360 150 H460" />
          <path d="M360 178 H460" />
          <path d="M385 150 V178" />
          <path d="M435 150 V178" />
        </g>
        <text className="sysmap-label sysmap-label--overpass" x="360" y="138">
          Overpass · state
        </text>
        <g className="sysmap-plane sysmap-plane--toll">
          <path d="M200 250 H240" />
          <path d="M268 250 H308" />
          <path d="M240 236 V264" />
          <path d="M268 236 V264" />
        </g>
        <text className="sysmap-label sysmap-label--toll" x="200" y="224">
          Toll · economics
        </text>
        <g className="sysmap-plane sysmap-plane--dispatch">
          <path d="M360 248 H390" />
          <path d="M390 232 V268" />
          <path d="M430 232 V268" />
          <path d="M410 250 H470" />
          <path className="sysmap-intent" d="M458 242 L470 250 L458 258" />
        </g>
        <text className="sysmap-label sysmap-label--dispatch" x="360" y="222">
          Dispatch · interaction
        </text>
        <text className="sysmap-svg-foot" x="320" y="348" textAnchor="middle">
          planes meet at the company aperture
        </text>
      </svg>
      <p className="sysmap-aside">
        Design informed by <span>Convergence</span>
        <small>Independent · not in the runtime path</small>
      </p>
    </figure>
  )
}
