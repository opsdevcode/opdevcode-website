import Link from 'next/link'
import type { Product } from '@/lib/products'

export default function ProductCard({
  product,
  featured,
}: {
  product: Product
  featured?: boolean
}) {
  return (
    <article
      className={`product-card${featured ? ' product-card--featured' : ''} product-card--${product.slug}`}
    >
      <p className="product-kicker">
        <span className={`maturity maturity--${product.maturity}`}>{product.maturityLabel}</span>
        {product.domain}
      </p>
      <h3>
        <Link href={product.href}>{product.name}</Link>
      </h3>
      <p className="product-job">{product.job}</p>
      <p className="product-card-summary">{product.summary}</p>
      <p className="cta-row">
        <Link href={product.href}>{product.name}</Link>
        <a href={product.ctaHref} target="_blank" rel="noopener noreferrer">
          {product.ctaLabel} →
        </a>
      </p>
    </article>
  )
}
