import Link from 'next/link'
import type { Product } from '@/lib/products'
import ProductMotif from '@/components/ProductMotif'
import { ProductMark } from '@/components/BrandMark'
import MaturityMeta from '@/components/MaturityMeta'
import ProductSiteLink from '@/components/ProductSiteLink'

export default function ProductCard({
  product,
  featured,
  variant = 'default',
  job,
  hostLabel,
}: {
  product: Product
  featured?: boolean
  variant?: 'default' | 'portfolio'
  job?: string
  hostLabel?: string
}) {
  if (variant === 'portfolio') {
    return (
      <article className={`product-card product-card--portfolio product-card--${product.slug}`}>
        <div className="product-card-top">
          <ProductMark slug={product.slug} className="product-card-mark" />
          <p className="product-card-maturity">{product.maturityLabel}</p>
        </div>
        <h3>{product.name}</h3>
        <p className="product-card-summary">{job ?? product.summary}</p>
        <p className="cta-row">
          <ProductSiteLink href={product.publicUrl}>
            {hostLabel ?? `${product.slug}.opsdevco.de`}
          </ProductSiteLink>
        </p>
      </article>
    )
  }

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
        <ProductSiteLink href={product.publicUrl}>{product.name} site →</ProductSiteLink>
      </p>
    </article>
  )
}
