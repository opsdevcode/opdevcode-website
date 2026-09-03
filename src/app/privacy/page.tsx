import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Privacy',
    description: 'Privacy policy. Low-profile by design. Minimal data collection.',
    path: '/privacy',
  }),
  robots: 'noindex, follow',
}

export default function PrivacyPage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Legal</p>
        <h1 className="page-title">Privacy</h1>
        <p className="lede">Low-profile by design. This site collects minimal data.</p>
        <div className="product-page-grid">
          <div>
            <h2>What we collect</h2>
            <p>
              If you email OpsDevCode, we have your email and whatever you send. It is used to
              respond and do the work. It is not sold or shared.
            </p>
          </div>
          <div>
            <h2>This website</h2>
            <p>
              No analytics, no tracking pixels, no cookies. Hosted on Netlify; they may log requests
              per their policy. OpsDevCode does not use that data.
            </p>
          </div>
        </div>
        <p style={{ marginTop: 24 }}>
          <a href="mailto:eric@opsdevco.de">eric@opsdevco.de</a>
          {' · '}
          <Link href="/">Home</Link>
        </p>
      </section>
    </PageFrame>
  )
}
