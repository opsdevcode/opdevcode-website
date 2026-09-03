import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import ProductBlock from '@/components/ProductBlock'
import { products } from '@/lib/products'
import { SITE_DESCRIPTION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products',
  description: SITE_DESCRIPTION,
}

export default function ProductsPage() {
  return (
    <PageFrame>
      <section className="section">
        <h1 className="page-title">Products</h1>
        <p className="lede">
          Four named parts of one engineering system. Domain products stay authoritative. Dispatch
          is the experience across them.
        </p>
        <div className="product-stack">
          {products.map((product) => (
            <ProductBlock key={product.slug} product={product} />
          ))}
        </div>
        <p className="note" style={{ marginTop: 'var(--space-32)' }}>
          Small open-source utilities from earlier platform work remain on{' '}
          <a href="https://github.com/opsdevcode" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . They are not the product portfolio. <Link href="/approach">How the products fit</Link>.
        </p>
      </section>
    </PageFrame>
  )
}
