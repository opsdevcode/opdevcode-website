import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import MintJourneyNav from '@/components/MintJourneyNav'
import { MINT_DEVELOPERS_HREF, MINT_GET_STARTED_HREF } from '@/lib/mint-journey'
import { pageMeta } from '@/lib/seo'
import { MINT_LANGUAGE_URL, MINT_QUICKSTART_URL } from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = pageMeta({
  title: 'Mint for developers',
  description:
    'Install Mint locally, compile intent offline, and inspect a plan. No mint apply. No live providers.',
  path: MINT_DEVELOPERS_HREF,
})

export default function MintDevelopersPage() {
  return (
    <PageFrame>
      <section className="section product-page product-page--mint">
        <p className="rail-label">Mint · Developers</p>
        <h1 className="page-title">Compile intent on your laptop</h1>
        <p className="lede">
          Mint is a local language CLI. You name a unit, compile MintIR, and produce a plan. The
          browser lab shows captured output. It is not a second compiler.
        </p>
        <MintJourneyNav />
        <p className="cta-row">
          <Link className="btn primary" href={MINT_GET_STARTED_HREF}>
            Get started
          </Link>
        </p>
        <p className="cta-follow">
          <Link href="/labs/mint">Mint lab</Link>
          <a href={MINT_QUICKSTART_URL} target="_blank" rel="noopener noreferrer">
            Language quickstart
          </a>
          <a href={MINT_LANGUAGE_URL} target="_blank" rel="noopener noreferrer">
            View source
          </a>
        </p>
        <h2>Problem</h2>
        <p>
          You cannot review a change you cannot compile. Scripts mutate as they run. There is no{' '}
          <code>mint apply</code> here on purpose.
        </p>
        <h2>Benefit</h2>
        <p>
          Deterministic offline compilation. Fail-closed on unsupported required capabilities.
          Integrations you add do not pip-install on <code>search</code> or <code>inspect</code>.
        </p>
        <h2>Example</h2>
        <p>
          From the local-marker template: <code>mint check</code>, <code>mint compile</code>,{' '}
          <code>mint plan --locked</code>. Planning does not write the sandbox marker.
        </p>
      </section>
    </PageFrame>
  )
}
