import type { Metadata } from 'next'
import { SITE_DESCRIPTION, SITE_URL } from '@/lib/site'

const OG_IMAGE = '/assets/preview-v5.png'
const OG_ALT = 'OpsDevCode — Infrastructure for modern engineering organizations.'

export function pageMeta({
  title,
  description = SITE_DESCRIPTION,
  path,
  absoluteTitle,
}: {
  title: string
  description?: string
  path: string
  absoluteTitle?: string
}): Metadata {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`
  const ogTitle = absoluteTitle ?? `${title} | OpsDevCode`
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  }
}
