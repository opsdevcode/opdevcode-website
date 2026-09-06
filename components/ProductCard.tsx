import Link from 'next/link'
import type { Product } from '@/lib/products'
import ProductMotif from '@/components/ProductMotif'
import MaturityMeta from '@/components/MaturityMeta'

export default function ProductCard({
  product,
  featured,
}: {
  product: Product
  featured?: boolean
}) {
  return (
    <article
      className={`product-card product-card--${product.slug}${featured ? ' product-card--featured' : ''}`}
    >
      <div className="product-card-top">
        <MaturityMeta index={product.maturityIndex} label={product.maturityLabel} />
        <ProductMotif slug={product.slug} />
      </div>
      <h3>
        <Link href={product.href}>{product.name}</Link>
      </h3>
      <p className="product-card-domain">{product.domain}</p>
      <p className="product-job">{product.job}</p>
      <p className="product-card-summary">{product.summary}</p>
      <p className="cta-row">
        <Link href={product.href}>{product.name} →</Link>
        <a href={product.publicUrl}>{product.name} site →</a>
      </p>
    </article>
  )
}
