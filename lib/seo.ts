import type { Metadata } from 'next'
import {
  COMPANY_OG_HEIGHT,
  COMPANY_OG_SRC,
  COMPANY_OG_WIDTH,
  SITE_DESCRIPTION,
  SITE_SHARE_TITLE,
  SITE_URL,
} from '@/lib/site'

const OG_IMAGE = COMPANY_OG_SRC
const OG_ALT = SITE_SHARE_TITLE

export function pageMeta({
  title,
  description = SITE_DESCRIPTION,
  path,
  canonicalUrl,
  absoluteTitle,
}: {
  title: string
  description?: string
  path: string
  canonicalUrl?: string
  absoluteTitle?: string
}): Metadata {
  const canonical = canonicalUrl ?? `${SITE_URL}${path === '/' ? '/' : path}`
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
      images: [{ url: OG_IMAGE, width: COMPANY_OG_WIDTH, height: COMPANY_OG_HEIGHT, alt: OG_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  }
}
