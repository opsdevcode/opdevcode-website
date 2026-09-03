import Link from 'next/link'
import type { Product } from '@/lib/products'

export default function ProductBlock({ product }: { product: Product }) {
  return (
    <article className={`product-block product-block--${product.slug}`}>
      <header>
        <p className="product-kicker">
          <span className={`maturity maturity--${product.maturity}`}>{product.maturityLabel}</span>
          {product.domain}
        </p>
        <h3>
          <Link href={product.href}>{product.name}</Link>
        </h3>
        <p className="product-job">{product.job}</p>
      </header>
      <p>{product.summary}</p>
      <p className="product-maturity-note">{product.maturityNote}</p>
      <p className="cta-row">
        <Link href={product.href} className="btn">
          {product.name} details
        </Link>
        <a className="btn primary" href={product.ctaHref} target="_blank" rel="noopener noreferrer">
          {product.ctaLabel}
        </a>
      </p>
    </article>
  )
}
