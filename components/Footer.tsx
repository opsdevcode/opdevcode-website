import Link from 'next/link'
import { BrandMark, ProductMark } from '@/components/BrandMark'
import { products } from '@/lib/products'
import {
  CONVERGENCE_URL,
  GITHUB_ORG_URL,
  PRODUCT_URLS,
  SITE_TAGLINE,
  productSiteHref,
} from '@/lib/site'
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
            <p>{SITE_TAGLINE}</p>
          </div>
        </div>
        <div>
          <p className="footer-label">Products</p>
          {products.map((product) => (
            <ProductSiteLink
              key={product.slug}
              href={productSiteHref(product.slug)}
              className="footer-product"
            >
              <ProductMark slug={product.slug} className="footer-product-mark" />
              {product.name}
            </ProductSiteLink>
          ))}
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/approach">Approach</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">Company</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>
          <p className="footer-label">Resources</p>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
            Convergence
          </a>
          <a href={PRODUCT_URLS.repave} target="_blank" rel="noopener noreferrer">
            repave.opsdevco.de
          </a>
        </div>
      </div>
    </footer>
  )
}
