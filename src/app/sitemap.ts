import type { MetadataRoute } from 'next'
import { serviceSlugs } from '@/lib/services-detail'
import { products, productSlugs } from '@/lib/products'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages = [
    '',
    '/about',
    '/approach',
    '/products',
    '/services',
    '/privacy',
    ...productSlugs.map((slug) => `/products/${slug}`),
    ...serviceSlugs.map((slug) => `/services/${slug}`),
  ]
  const companyPages = pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }))
  const productHosts = products.map((product) => ({
    url: `${product.publicUrl}/`,
    lastModified,
  }))
  return [...companyPages, ...productHosts]
}
