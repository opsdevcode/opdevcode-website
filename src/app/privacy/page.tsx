import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy policy. Low-profile by design. Minimal data collection.',
  robots: 'noindex, follow',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="wrap">
          <section className="section">
            <h2 style={{ margin: '0 0 16px' }}>Privacy</h2>
            <p className="note" style={{ margin: '0 0 20px' }}>Low-profile by design. This site collects minimal data.</p>
            <h3 style={{ fontSize: '1.1rem', margin: '16px 0 8px' }}>What we collect</h3>
            <p>If you email us, we have your email and whatever you send. We use it to respond and do the work. We don&apos;t sell or share it.</p>
            <h3 style={{ fontSize: '1.1rem', margin: '16px 0 8px' }}>This website</h3>
            <p>No analytics, no tracking pixels, no cookies. Hosted on Netlify; they may log requests per their policy. We don&apos;t use that data.</p>
            <h3 style={{ fontSize: '1.1rem', margin: '16px 0 8px' }}>Questions</h3>
            <p><a href="mailto:eric@opsdevco.de">eric@opsdevco.de</a></p>
            <p style={{ marginTop: 24 }}><Link href="/">← Back</Link></p>
          </section>
        </div>
      </main>
    </>
  )
}
