'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ProductMark } from '@/components/BrandMark'
import { PRODUCT_URLS, REPAVE_WAITLIST_URL } from '@/lib/site'

const pageNav = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#maturity', label: 'Maturity' },
]

const familyNav = [
  { href: '/repave', label: 'Repave', current: true },
  { href: PRODUCT_URLS.overpass, label: 'Overpass', external: true },
  { href: PRODUCT_URLS.toll, label: 'Toll', external: true },
  { href: PRODUCT_URLS.dispatch, label: 'Dispatch', external: true },
]

export default function RepaveSalesHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="header-wrap header-wrap--repave">
        <header>
          <div className="brand brand--repave">
            <Link
              href="/repave"
              className="brand-lockup"
              aria-label="Repave, an OpsDevCode product"
              onClick={() => setOpen(false)}
            >
              <ProductMark slug="repave" className="brand-mark brand-mark--repave" decorative />
            </Link>
            <span className="brand-stack">
              <Link href="/repave" className="brand-wordmark-link" onClick={() => setOpen(false)}>
                <strong className="brand-wordmark">Repave</strong>
              </Link>
              <span className="brand-byline">
                by{' '}
                <Link href="/" onClick={() => setOpen(false)}>
                  OpsDevCode
                </Link>
              </span>
            </span>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" className={open ? 'is-open' : undefined} aria-label="Primary">
            {pageNav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="btn primary header-access"
              href={REPAVE_WAITLIST_URL}
              onClick={() => setOpen(false)}
            >
              Get access →
            </a>
            <div className="repave-family-nav" aria-label="OpsDevCode products">
              {familyNav.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}
