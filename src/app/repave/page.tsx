import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import RepaveLifecycleFigure from '@/components/RepaveLifecycleFigure'
import RepaveSalesHeader from '@/components/RepaveSalesHeader'
import { getProduct } from '@/lib/products'
import { pageMeta } from '@/lib/seo'
import { REPAVE_WAITLIST_URL } from '@/lib/site'

export const dynamic = 'force-static'

const product = getProduct('repave')

export const metadata: Metadata = pageMeta({
  title: 'Repave',
  description:
    'Keep repositories aligned with the way they were meant to operate. Repave understands approved state, observes actual state, and governs the path back to alignment.',
  path: '/repave',
})

export default function RepaveSalesPage() {
  if (!product) return null

  return (
    <div className="repave-sales">
      <RepaveSalesHeader />
      <main id="main">
        <div className="wrap wrap--repave-sales">
          <section className="repave-hero" id="product" aria-labelledby="repave-hero-title">
            <p className="repave-eyebrow">
              <span className="repave-eyebrow-mark" aria-hidden="true" />
              REPAVE · GOVERNED SOFTWARE STATE
            </p>
            <div className="repave-hero-grid">
              <div className="repave-hero-copy">
                <h1 id="repave-hero-title">
                  Keep repositories aligned
                  <br />
                  with the way they were meant
                  <br />
                  to operate.
                </h1>
                <p className="repave-hero-body">
                  Repave understands the approved state of a repository, observes what exists now,
                  identifies meaningful differences, and provides a governed path to bring supported
                  drift back into alignment.
                </p>
                <p className="cta-row repave-hero-cta">
                  <a className="btn primary" href={REPAVE_WAITLIST_URL}>
                    Get access →
                  </a>
                  <a className="btn" href="#how-it-works">
                    See how Repave works ↓
                  </a>
                </p>
                <p className="repave-support">
                  Governed delivery doesn&apos;t end when the repository is created.
                </p>
              </div>
              <RepaveLifecycleFigure />
            </div>
            <div className="repave-proof">
              <div className="repave-proof-compact">
                <div>
                  <p className="repave-proof-label">APPROVED</p>
                  <p>Know what should be true.</p>
                </div>
                <div>
                  <p className="repave-proof-label">OBSERVED</p>
                  <p>Know what is true.</p>
                </div>
                <div>
                  <p className="repave-proof-label">GOVERNED</p>
                  <p>Change without losing intent.</p>
                </div>
              </div>
              <div className="repave-proof-expanded">
                <div>
                  <p className="repave-proof-label">01 · APPROVED STATE</p>
                  <p>What configuration and baseline is intended?</p>
                </div>
                <div>
                  <p className="repave-proof-label">02 · OBSERVED STATE</p>
                  <p>What does the repository actually look like now?</p>
                </div>
                <div>
                  <p className="repave-proof-label">03 · GOVERNED CHANGE</p>
                  <p>
                    What supported difference can be changed without losing intended configuration?
                  </p>
                </div>
                <div>
                  <p className="repave-proof-label">04 · VERIFICATION</p>
                  <p>Did the resulting repository actually reach the expected state?</p>
                </div>
              </div>
            </div>
          </section>

          <section className="repave-next" id="how-it-works" aria-labelledby="repave-next-title">
            <p className="repave-eyebrow">
              <span className="repave-eyebrow-mark" aria-hidden="true" />
              THE LIFECYCLE PROBLEM
            </p>
            <h2 id="repave-next-title">
              Repository creation is the beginning,
              <br />
              not the lifecycle.
            </h2>
            <div className="repave-next-copy">
              <p>A repository can start from the right template and still diverge over time.</p>
              <p>
                Configuration changes. Supported baselines move. Tooling evolves. Teams make
                intentional exceptions.
              </p>
              <p>The hard problem isn&apos;t creating another repository.</p>
              <p>
                It&apos;s knowing which differences are intentional, which are supported, and how to
                change the rest without erasing the decisions that belong to the team.
              </p>
            </div>
          </section>

          <section className="repave-later" id="capabilities" aria-labelledby="repave-cap-title">
            <p className="repave-eyebrow">
              <span className="repave-eyebrow-mark" aria-hidden="true" />
              CAPABILITIES
            </p>
            <h2 id="repave-cap-title">What Repave owns</h2>
            <ul className="bullets">
              {product.owns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="repave-later" id="maturity" aria-labelledby="repave-mat-title">
            <p className="repave-eyebrow">
              <span className="repave-eyebrow-mark" aria-hidden="true" />
              MATURITY
            </p>
            <h2 id="repave-mat-title">{product.maturityLabel}</h2>
            <p>{product.maturityNote}</p>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
