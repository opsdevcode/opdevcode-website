import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/tools', label: 'Tools' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

export default function Header({ active }: { active?: string }) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="header-wrap">
        <header>
          <Link href="/" className="brand">
            <Image src="/assets/opsdevco-logo-o-terminal.png" alt="OpsDevCo" width={28} height={28} />
            <strong>OpsDevCo</strong>
          </Link>
          <nav>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={active === item.label ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/about#contact">Contact</Link>
          </nav>
        </header>
      </div>
    </>
  )
}
