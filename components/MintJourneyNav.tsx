'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MINT_JOURNEY_NAV } from '@/lib/mint-journey'

export default function MintJourneyNav() {
  const pathname = usePathname() || MINT_JOURNEY_NAV[0].href
  return (
    <nav className="mint-journey-nav" aria-label="Mint adoption">
      {MINT_JOURNEY_NAV.map((item) => {
        const active = pathname === item.href
        return (
          <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined}>
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
