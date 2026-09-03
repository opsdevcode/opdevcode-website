export default function ProductMotif({ slug }: { slug: string }) {
  const common = {
    width: 72,
    height: 40,
    viewBox: '0 0 72 40',
    fill: 'none',
    'aria-hidden': true as const,
    className: 'product-motif',
  }
  if (slug === 'repave') {
    return (
      <svg {...common}>
        <path d="M4 28 H20 L28 12 H44 L52 28 H68" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="20" cy="28" r="2.2" fill="currentColor" />
        <circle cx="28" cy="12" r="2.2" fill="currentColor" />
        <circle cx="44" cy="12" r="2.2" fill="currentColor" />
        <circle cx="52" cy="28" r="2.2" fill="currentColor" />
      </svg>
    )
  }
  if (slug === 'overpass') {
    return (
      <svg {...common}>
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="52" cy="12" r="4" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="50" cy="30" r="3.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M25 18 L48 13 M24 22 L47 28 M52 16 L50 26" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
  if (slug === 'toll') {
    return (
      <svg {...common}>
        <path d="M8 10 H64 M8 20 H64 M8 30 H48" stroke="currentColor" strokeWidth="1.25" />
        <rect x="50" y="26" width="14" height="8" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 20 H28 M44 20 H60" stroke="currentColor" strokeWidth="1.25" />
      <circle
        cx="36"
        cy="20"
        r="8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="2 2"
      />
      <path d="M36 12 V8 M36 28 V32" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}
