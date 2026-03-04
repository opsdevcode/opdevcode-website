import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-brand">
        <Image src="/assets/opsdevco-logo-o-terminal.png" alt="" width={24} height={24} aria-hidden />
        <span>© {year} OpsDevCo</span>
      </div>
      <div>
        <Link href="/privacy">Privacy</Link>
        <span style={{ margin: '0 8px' }}>·</span>
        <Link href="/tools">Tools</Link>
        <span style={{ margin: '0 8px' }}>·</span>
        opsdevco.de
      </div>
    </footer>
  )
}
