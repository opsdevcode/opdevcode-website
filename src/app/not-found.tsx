import Link from 'next/link'
import PageFrame from '@/components/PageFrame'

export default function NotFound() {
  return (
    <PageFrame>
      <section className="section err-main">
        <p className="rail-label">Error</p>
        <h1 className="page-title">404</h1>
        <p className="lede">
          That page does not exist. The company site is organized around products and services.
        </p>
        <p className="cta-row">
          <Link className="btn primary" href="/">
            Go home
          </Link>
          <Link className="btn" href="/products">
            Products
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
