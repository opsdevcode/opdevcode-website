import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import LabsAnalytics from '@/components/labs/LabsAnalytics'
import LabsCtas from '@/components/labs/LabsCtas'
import { LABS, SIMULATED_LABEL } from '@/lib/labs'
import { MINT_LAB } from '@/lib/mint-lab'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Labs',
  description:
    'Three simulated guided labs: create a governed environment, observe infrastructure, and reclaim leftover spend. No cloud credentials.',
  path: '/labs',
})

export default function LabsPage() {
  return (
    <PageFrame>
      <LabsAnalytics />
      <section className="section labs-hub">
        <p className="rail-label">Labs</p>
        <h1 className="page-title">Guided product labs. Simulated. Deterministic.</h1>
        <p className="lede">
          Walk Environment V1 the way the products actually split authority: Repave mints and
          records intent, Overpass cites what was observed, Toll persists economic evidence. Nothing
          here applies to AWS, Azure, or GCP.
        </p>
        <p className="lab-sim-banner" role="status">
          {SIMULATED_LABEL}. No production tenant, no secrets, no cloud mutation.
        </p>
        <ol className="lab-index">
          <li>
            <Link href={MINT_LAB.href} className="lab-index-card">
              <span className="lab-index-num">Mint lab</span>
              <strong>{MINT_LAB.title}</strong>
              <span className="lab-authority">
                <span>{MINT_LAB.authority}</span> {MINT_LAB.authorityVerb}
              </span>
              <p>{MINT_LAB.summary}</p>
              <span className="lab-index-go">Open /labs/mint</span>
            </Link>
          </li>
          {LABS.map((lab) => (
            <li key={lab.slug}>
              <Link href={lab.href} className="lab-index-card">
                <span className="lab-index-num">Lab {lab.number}</span>
                <strong>{lab.title}</strong>
                <span className="lab-authority">
                  <span>{lab.authority}</span> {lab.authorityVerb}
                </span>
                <p>{lab.summary}</p>
                <span className="lab-index-go">Start lab {lab.number}</span>
              </Link>
            </li>
          ))}
        </ol>
        <h2>What these labs are not</h2>
        <ul>
          <li>Not a signup. Evaluation stays on Repave waitlist and Calendly.</li>
          <li>Not live-cloud discovery. Overpass citations are posted, simulated facts.</li>
          <li>
            Not a destroy button. REQUEST_RECLAIM is intent. Verified reclaim needs present+0.
          </li>
        </ul>
        <LabsCtas />
      </section>
    </PageFrame>
  )
}
