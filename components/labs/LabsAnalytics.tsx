'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'
import type { LabSlug } from '@/lib/labs'

export function trackLabStart() {
  track({
    name: 'evaluation_start',
    properties: {
      product: 'company',
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

export default function LabsAnalytics({ lab }: { lab?: LabSlug }) {
  useEffect(() => {
    if (lab) {
      trackLabStart()
    }
  }, [lab])
  return null
}
