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
            <p>That page doesn&apos;t exist. Head back to the homepage or browse services.</p>
            <Link className="btn primary" href="/">Go home</Link>
            <Link className="btn" href="/services" style={{ marginLeft: 'var(--space-12)' }}>Services</Link>
          </div>
        </div>
      </main>
    </>
  )
}
