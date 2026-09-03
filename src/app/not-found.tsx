import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="wrap">
          <div className="section err-main">
            <h1>404</h1>
            <p>
              That page does not exist. The company site is organized around products and services.
            </p>
            <Link className="btn primary" href="/">
              Go home
            </Link>
            <Link className="btn" href="/products" style={{ marginLeft: 'var(--space-12)' }}>
              Products
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
