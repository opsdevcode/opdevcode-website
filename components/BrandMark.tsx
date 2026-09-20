import { PRODUCT_MARK_SRC } from '@/lib/site'

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

const productTitles = {
  repave: 'Repave',
  overpass: 'Overpass',
  toll: 'Toll',
  dispatch: 'Dispatch',
} as const

export function ProductMark({
  slug,
  className,
  decorative = true,
}: {
  slug: string
  className?: string
  decorative?: boolean
}) {
  const src = PRODUCT_MARK_SRC[slug as keyof typeof PRODUCT_MARK_SRC]
  if (!src) return null
  const title = productTitles[slug as keyof typeof productTitles]
  return (
    <img src={src} alt={decorative ? '' : title} className={className} width={32} height={32} />
  )
}
