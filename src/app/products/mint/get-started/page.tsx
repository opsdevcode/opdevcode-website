import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import MintJourneyNav from '@/components/MintJourneyNav'
import { MINT_GET_STARTED_HREF, MINT_HUB_HREF } from '@/lib/mint-journey'
import {
  MINT_ACTION_TAG,
  MINT_GITHUB_TAG,
  MINT_LAB_GITHUB_TAG,
  MINT_LAB_PYPI_VERSION,
} from '@/lib/mint-release'
import { pageMeta } from '@/lib/seo'
import {
  MINT_ACTION_RELEASE_URL,
  MINT_QUICKSTART_URL,
  MINT_RELEASE_URL,
  MINT_STARTER_URL,
} from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = pageMeta({
  title: 'Get started with Mint',
  description:
    'Install Mint locally, confirm the CLI, and pin a GitHub Release on pull request. Public preview. No mint apply.',
  path: MINT_GET_STARTED_HREF,
})

export default function MintGetStartedPage() {
  return (
    <PageFrame>
      <section className="section product-page product-page--mint">
        <p className="rail-label">Mint</p>
        <h1 className="page-title">Get started</h1>
        <p className="lede">
          Public preview / alpha. Not production-ready. There is no <code>mint apply</code> and no
          default live provider execution.
        </p>
        <MintJourneyNav />
        <p className="cta-row">
          <a
            className="btn primary"
            href={MINT_QUICKSTART_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the language quickstart
          </a>
        </p>
        <p className="cta-follow">
          <Link href="/labs/mint">Mint lab</Link>
          <Link href={MINT_HUB_HREF}>Mint briefing</Link>
        </p>
        <h2>Install the language CLI</h2>
        <p>
          Python 3.12. Current published language is{' '}
          <a href={MINT_RELEASE_URL} target="_blank" rel="noopener noreferrer">
            {MINT_GITHUB_TAG}
          </a>
          . Do not pin a superseded release on this install path.
        </p>
        <pre className="mint-install">
          <code>{`pipx install specmint
# or: uv tool install specmint
mint version`}</code>
        </pre>
        <h2>Confirm without applying</h2>
        <p>
          The ten-minute loop is on the quickstart: <code>init</code>, <code>doctor</code>,{' '}
          <code>check</code>, <code>compile</code>, <code>plan</code>. Planning does not write
          infrastructure. <code>mint apply</code> is unknown.
        </p>
        <h2>Pin on pull request</h2>
        <p>
          Use{' '}
          <a href={MINT_ACTION_RELEASE_URL} target="_blank" rel="noopener noreferrer">
            mint-action {MINT_ACTION_TAG}
          </a>{' '}
          with <code>contents: read</code>, or start from{' '}
          <a href={MINT_STARTER_URL} target="_blank" rel="noopener noreferrer">
            mint-starter
          </a>
          . The action installs a GitHub Release wheel after <code>SHA256SUMS</code>. There is no{' '}
          <code>latest</code> tag.
        </p>
        <h2>Lab capture is older on purpose</h2>
        <p>
          The Mint lab shows artifacts captured from {MINT_LAB_PYPI_VERSION} / {MINT_LAB_GITHUB_TAG}
          . That provenance is not the advertised install. A newer release does not relabel older
          output.
        </p>
      </section>
    </PageFrame>
  )
}
