'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CONVERGENCE_URL } from '@/lib/site'

const navItems = [
  { href: '/products', label: 'Products', match: '/products' },
  { href: '/approach', label: 'Approach', match: '/approach' },
  { href: CONVERGENCE_URL, label: 'Convergence', external: true },
  { href: '/services', label: 'Services', match: '/services' },
  { href: '/about', label: 'Company', match: '/about' },
]

function isActive(pathname: string, match?: string) {
  if (!match) return false
  return pathname === match || pathname.startsWith(`${match}/`)
}

export default function Header() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="header-wrap">
        <header>
          <Link
            href="/"
            className="brand"
            aria-label="OpsDevCode home"
            onClick={() => setOpen(false)}
          >
            <Image
              className="brand-logo"
              src="/assets/opsdevco-logo-o-terminal.png"
              alt=""
              width={72}
              height={72}
              priority
              aria-hidden
            />
            <strong className="brand-wordmark">OpsDevCode</strong>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" className={open ? 'is-open' : undefined} aria-label="Primary">
            {navItems.map((item) =>
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(pathname, item.match) ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </header>
      </div>
    </>
  )
}
