import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PageFrame({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={home ? 'site-shell site-shell--parent' : 'site-shell'}>
      <Header />
      <main id="main">
        <div className={home ? 'wrap home' : 'wrap'}>
          {children}
          <Footer />
        </div>
      </main>
    </div>
  )
}
