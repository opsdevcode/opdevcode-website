import Link from 'next/link'
import Image from 'next/image'
import { CONVERGENCE_URL, GITHUB_ORG_URL } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-brand">
        <Image
          className="footer-logo"
          src="/assets/opsdevco-logo-o-terminal.png"
          alt=""
          width={48}
          height={48}
          aria-hidden
        />
        <span>© {year} OpsDevCode</span>
      </div>
      <div className="footer-links">
        <Link href="/products">Products</Link>
        <span aria-hidden> · </span>
        <Link href="/services">Services</Link>
        <span aria-hidden> · </span>
        <Link href="/about">Company</Link>
        <span aria-hidden> · </span>
        <Link href="/privacy">Privacy</Link>
        <span aria-hidden> · </span>
        <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
          Convergence
        </a>
        <span aria-hidden> · </span>
        <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span aria-hidden> · </span>
        opsdevco.de
      </div>
    </footer>
  )
}
