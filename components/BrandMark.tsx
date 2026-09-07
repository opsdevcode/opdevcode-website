export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M6 13 V6 H13" />
      <path d="M19 6 H26 V13" />
      <path d="M26 19 V26 H19" />
      <path d="M13 26 H6 V19" />
    </svg>
  )
}

const productPaths: Record<string, string[]> = {
  repave: ['M7 24 H25', 'M7 17 H18', 'M14 10 H25', 'M7 24 V17', 'M25 17 V10'],
  overpass: ['M7 11 H25', 'M7 21 H25', 'M12 11 V21', 'M20 11 V21'],
  toll: [
    'M7 16 H13',
    'M19 16 H25',
    'M13 12 V20',
    'M19 12 V20',
    'M10 12 V14',
    'M10 18 V20',
    'M22 12 V14',
    'M22 18 V20',
  ],
  dispatch: ['M6 16 H12', 'M12 10 V22', 'M20 10 V22', 'M16 16 H26', 'M23 13 L26 16 L23 19'],
}

export function ProductMark({ slug, className }: { slug: string; className?: string }) {
  const paths = productPaths[slug] ?? productPaths.repave
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
