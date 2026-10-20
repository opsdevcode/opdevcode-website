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

export function trackLabProof(proofType?: unknown) {
  const type = proofType === 'lifecycle' ? 'lifecycle' : 'other'
  track({
    name: 'proof_view',
    properties: {
      product: 'company',
      source_surface: 'labs',
      proof_type: type,
    },
  })
}

export default function LabsAnalytics({
  lab,
  recordedProof,
}: {
  lab?: LabSurface
  recordedProof?: boolean
}) {
  useEffect(() => {
    if (lab) {
      trackLabStart(lab === 'mint' ? 'mint' : 'company')
    }
    if (recordedProof) {
      trackLabProof('lifecycle')
    }
  }, [lab, recordedProof])
  return null
}
