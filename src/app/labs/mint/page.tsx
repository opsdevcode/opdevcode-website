import type { Metadata } from 'next'
import PageFrame from '@/components/PageFrame'
import LabsAnalytics from '@/components/labs/LabsAnalytics'
import MintLabWorkbench from '@/components/labs/MintLabWorkbench'
import { MINT_LAB } from '@/lib/mint-lab'
import { pageMeta } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata: Metadata = pageMeta({
  title: `Lab: ${MINT_LAB.title}`,
  description: MINT_LAB.summary,
  path: MINT_LAB.href,
})

export default function MintLabPage() {
  return (
    <PageFrame>
      <LabsAnalytics lab="mint" />
      <section className="section">
        <MintLabWorkbench />
      </section>
    </PageFrame>
  )
}
