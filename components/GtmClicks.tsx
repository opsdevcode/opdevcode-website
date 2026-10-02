'use client'

import { useEffect } from 'react'
import { inferPublicEvent, track } from '@/lib/analytics'

export default function GtmClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a')
      if (!link?.href) return
      const inferred = inferPublicEvent(link.href, window.location.pathname)
      if (inferred) {
        track({
          name: inferred.name as 'product_explore' | 'evaluation_cta',
          properties: inferred.properties,
        })
      }
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
  return null
}
