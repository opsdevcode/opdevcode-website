'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import {
  SCRIPT_URL,
  allowedDomainsAttr,
  analyticsBuildEnabled,
  trackerEnabled,
} from '@/lib/analytics'

export default function UmamiTracker() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(trackerEnabled(window.location.hostname))
  }, [])

  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim()
  if (!active || !websiteId || !analyticsBuildEnabled()) return null

  return (
    <Script
      src={SCRIPT_URL}
      data-website-id={websiteId}
      data-domains={allowedDomainsAttr()}
      strategy="afterInteractive"
    />
  )
}
