import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy policy. Low-profile by design. Minimal data collection.',
  robots: 'noindex, follow',
}

export default function PrivacyPage() {
  return (
    <PageFrame>
      <section className="section">
        <h1 className="page-title">Privacy</h1>
        <p className="note" style={{ margin: '0 0 20px' }}>
          Low-profile by design. This site collects minimal data.
        </p>
        <h2 style={{ fontSize: '1.1rem', margin: '16px 0 8px' }}>What we collect</h2>
        <p>
          If you email OpsDevCode, we have your email and whatever you send. It is used to respond
          and do the work. It is not sold or shared.
        </p>
        <h2 style={{ fontSize: '1.1rem', margin: '16px 0 8px' }}>This website</h2>
        <p>
          No analytics, no tracking pixels, no cookies. Hosted on Netlify; they may log requests per
          their policy. OpsDevCode does not use that data.
        </p>
        <h2 style={{ fontSize: '1.1rem', margin: '16px 0 8px' }}>Questions</h2>
        <p>
          <a href="mailto:eric@opsdevco.de">eric@opsdevco.de</a>
        </p>
        <p style={{ marginTop: 24 }}>
          <Link href="/">← Home</Link>
        </p>
      </section>
    </PageFrame>
  )
}
