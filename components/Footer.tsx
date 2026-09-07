import Link from 'next/link'
import { BrandMark } from '@/components/BrandMark'
import { CONVERGENCE_URL, GITHUB_ORG_URL, PRODUCT_URLS, productSiteHref } from '@/lib/site'
import ProductSiteLink from '@/components/ProductSiteLink'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <BrandMark className="footer-mark" />
          <div>
            <strong>OpsDevCode</strong>
            <p>© {year} · opsdevco.de</p>
          </div>
        </div>
        <div>
          <p className="footer-label">Products</p>
          <ProductSiteLink href={productSiteHref('repave')}>Repave</ProductSiteLink>
          <ProductSiteLink href={productSiteHref('overpass')}>Overpass</ProductSiteLink>
          <ProductSiteLink href={productSiteHref('toll')}>Toll</ProductSiteLink>
          <ProductSiteLink href={productSiteHref('dispatch')}>Dispatch</ProductSiteLink>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/approach">Approach</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">Company</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>
          <p className="footer-label">Elsewhere</p>
          <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
            Convergence
          </a>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={PRODUCT_URLS.repave} target="_blank" rel="noopener noreferrer">
            repave.opsdevco.de
          </a>
        </div>
      </div>
    </footer>
  )
}
