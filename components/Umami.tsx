'use client'

import { useEffect } from 'react'
import {
  UMAMI_DOMAINS,
  UMAMI_SCRIPT_URL,
  classifyCompanyClick,
  shouldLoadUmami,
  trackUmami,
} from '@/lib/umami'

export default function Umami() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''

  useEffect(() => {
    const host = window.location.hostname
    if (!shouldLoadUmami(host, websiteId)) return

    const existing = document.querySelector(`script[src="${UMAMI_SCRIPT_URL}"]`)
    if (!existing) {
      const script = document.createElement('script')
      script.defer = true
      script.src = UMAMI_SCRIPT_URL
      script.dataset.websiteId = websiteId
      script.dataset.domains = UMAMI_DOMAINS
      document.head.appendChild(script)
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const classified = classifyCompanyClick(href)
      if (classified) trackUmami(classified.event, classified.props)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [websiteId])

  return null
}
