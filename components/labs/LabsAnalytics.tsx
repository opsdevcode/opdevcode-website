'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'
import type { LabSurface } from '@/lib/labs'

export function trackLabStart(product: 'company' | 'mint' = 'company') {
  track({
    name: 'evaluation_start',
    properties: {
      product,
      source_surface: 'labs',
      cta: 'evaluate',
    },
  })
}

export function trackLabProof() {
  track({
    name: 'proof_view',
    properties: {
      product: 'company',
      source_surface: 'labs',
      proof_type: 'other',
    },
  })
}

export default function LabsAnalytics({ lab }: { lab?: LabSurface }) {
  useEffect(() => {
    if (lab) {
      trackLabStart(lab === 'mint' ? 'mint' : 'company')
    }
  }, [lab])
  return null
}
