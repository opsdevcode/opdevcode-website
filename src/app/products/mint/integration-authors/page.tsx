import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import MintJourneyNav from '@/components/MintJourneyNav'
import { MINT_GET_STARTED_HREF, MINT_INTEGRATION_AUTHORS_HREF } from '@/lib/mint-journey'
import { MINT_REGISTRY_TAG } from '@/lib/mint-release'
import { pageMeta } from '@/lib/seo'
import {
  MINT_INTEGRATION_AUTHORING_URL,
  MINT_INTEGRATION_PROTOCOL_URL,
  MINT_REFERENCE_URL,
  MINT_REGISTRY_RELEASE_URL,
} from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = pageMeta({
  title: 'Mint for integration authors',
  description:
    'Realize a Mint capability for a service. Planning support never grants execution. No live provider mutation.',
  path: MINT_INTEGRATION_AUTHORS_HREF,
})

export default function MintIntegrationAuthorsPage() {
  return (
    <PageFrame>
      <section className="section product-page product-page--mint">
        <p className="rail-label">Mint · Integration authors</p>
        <h1 className="page-title">Realize a capability. Do not take apply.</h1>
        <p className="lede">
          An integration is how Mint realizes a promise for a service. Execute stays fail-closed
          unless a privileged runtime is allowed. Protocol and authoring live on{' '}
          <a href={MINT_REFERENCE_URL} target="_blank" rel="noopener noreferrer">
            mint.opsdevco.de/reference
          </a>
          — this page is the company adoption path, not the spec.
        </p>
        <MintJourneyNav />
        <p className="cta-row">
          <Link className="btn primary" href={MINT_GET_STARTED_HREF}>
            Get started
          </Link>
        </p>
        <p className="cta-follow">
          <a href={MINT_INTEGRATION_AUTHORING_URL} target="_blank" rel="noopener noreferrer">
            Authoring plus conformance
          </a>
          <a href={MINT_INTEGRATION_PROTOCOL_URL} target="_blank" rel="noopener noreferrer">
            Integration Protocol v0
          </a>
        </p>
        <h2>Problem</h2>
        <p>
          Service adapters often ship with implied apply. Reviewers cannot tell observation from
          mutation. A Marketplace listing is not the contract.
        </p>
        <h2>Benefit</h2>
        <p>
          Contributions are a manifest, a stdio protocol server, fixtures, and fail-closed{' '}
          <code>execute</code>. Catalog records bind digest pins. Standalone wheels are GitHub
          Releases, not PyPI.
        </p>
        <h2>Directory</h2>
        <p>
          Official records live in the immutable{' '}
          <a href={MINT_REGISTRY_RELEASE_URL} target="_blank" rel="noopener noreferrer">
            mint-registry {MINT_REGISTRY_TAG}
          </a>{' '}
          snapshot. Cache that tag with <code>mint integrations update --registry</code>. Offline{' '}
          <code>search</code> against an already-cached catalog is not a registry refresh. There is
          no hosted registry service. The company integrations listing, when generated, stays owned
          by mint-registry — this journey does not recreate it.
        </p>
        <p>
          No Kubernetes snapshot integration. No live AWS, Azure, GCP, GitHub, or SaaS mutation from
          Mint.
        </p>
      </section>
    </PageFrame>
  )
}
