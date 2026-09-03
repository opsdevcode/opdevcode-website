import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageFrame from '@/components/PageFrame'
import { getProduct, productSlugs } from '@/lib/products'

export const dynamic = 'force-static'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Product' }
  return {
    title: product.name,
    description: `${product.domain}. ${product.summary}`,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <PageFrame>
      <section className="section">
        <p className="product-kicker">
          <span className={`maturity maturity--${product.maturity}`}>{product.maturityLabel}</span>
          {product.domain}
        </p>
        <h1 className="page-title">{product.name}</h1>
        <p className="product-job">{product.job}</p>
        <p className="lede">{product.summary}</p>
        {product.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <p className="product-maturity-note">{product.maturityNote}</p>
        <div className="split" style={{ marginTop: 'var(--space-32)' }}>
          <div className="tile">
            <h2>Owns</h2>
            <ul className="bullets">
              {product.owns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tile">
            <h2>Does not own</h2>
            <ul className="bullets">
              {product.doesNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="cta-row" style={{ marginTop: 'var(--space-32)' }}>
          <a
            className="btn primary"
            href={product.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {product.ctaLabel}
          </a>
          {product.secondaryHref ? (
            <a
              className="btn"
              href={product.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.secondaryLabel}
            </a>
          ) : null}
          <Link className="btn" href="/products">
            All products
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
