import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import MintJourneyNav from '@/components/MintJourneyNav'
import { CALENDLY_URL, MINT_SITE_URL } from '@/lib/site'
import { MINT_GET_STARTED_HREF, MINT_PLATFORM_TEAMS_HREF } from '@/lib/mint-journey'
import { pageMeta } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata: Metadata = pageMeta({
  title: 'Mint for platform teams',
  description:
    'Give platform leaders and application teams a shared language for governed change without taking domain ownership.',
  path: MINT_PLATFORM_TEAMS_HREF,
})

export default function MintPlatformTeamsPage() {
  return (
    <PageFrame>
      <section className="section product-page product-page--mint">
        <p className="rail-label">Mint · Platform teams</p>
        <h1 className="page-title">Governed intent without a required stack</h1>
        <p className="lede">
          Platform leaders need a repeatable way to name change. Application teams need a plan they
          can review. Mint stops at that plan. Repave, Overpass, Toll, and Dispatch stay optional.
        </p>
        <MintJourneyNav />
        <p className="cta-row">
          <Link className="btn primary" href={MINT_GET_STARTED_HREF}>
            Get started
          </Link>
        </p>
        <p className="cta-follow">
          <a href={MINT_SITE_URL} target="_blank" rel="noopener noreferrer">
            Language site
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Talk to OpsDevCode
          </a>
        </p>
        <h2>Problem</h2>
        <p>
          Automation intent lives in tickets, READMEs, and scripts. Reviewers cannot tell a plan
          from an apply. Domain products get asked to become the source of truth for everything.
        </p>
        <h2>Benefit</h2>
        <p>
          Teams compile the same intent into an offline governed plan. Authority for repositories,
          infrastructure state, and economics stays with those products when you adopt them. Mint is
          not a required first product.
        </p>
        <h2>Example</h2>
        <p>
          A team wants a sandbox marker created the same way every time. Mint compiles{' '}
          <code>local.sandbox.ensure_marker</code> and produces a plan. It does not write the marker
          and does not call AWS, Azure, or GCP.
        </p>
        <h2>Availability</h2>
        <p>
          Public preview / alpha. Not production-ready. No <code>mint apply</code>. No hosted Mint
          SKU.
        </p>
      </section>
    </PageFrame>
  )
}
