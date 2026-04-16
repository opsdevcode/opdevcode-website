import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://opsdevco.de'
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/services/platform-health`, lastModified: new Date() },
    { url: `${base}/services/finops`, lastModified: new Date() },
    { url: `${base}/services/terraform`, lastModified: new Date() },
    { url: `${base}/services/kubernetes`, lastModified: new Date() },
    { url: `${base}/services/architecture-review`, lastModified: new Date() },
    { url: `${base}/services/fractional-advisor`, lastModified: new Date() },
    { url: `${base}/tools`, lastModified: new Date() },
    { url: `${base}/agentic`, lastModified: new Date() },
  ]
}
