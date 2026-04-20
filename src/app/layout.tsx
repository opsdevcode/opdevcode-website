import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://opsdevco.de'),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#08090f' },
  ],
  title: { default: 'OpsDevCode | Cloud & Kubernetes Platform Engineering', template: '%s | OpsDevCode' },
  description:
    'Cloud and Kubernetes platform engineering for AWS and GCP — managed or self-hosted. Build, stabilize, and improve production platforms so teams can scale without fragile infrastructure, slow delivery, or runaway cloud costs.',
  openGraph: {
    title: 'OpsDevCode — Cloud & Kubernetes platform engineering',
    description:
      'Cloud and Kubernetes platform engineering for AWS and GCP — managed or self-hosted. Build, stabilize, and improve production platforms so teams can scale without fragile infrastructure, slow delivery, or runaway cloud costs.',
    images: ['/assets/og-image.png'],
    url: 'https://opsdevco.de',
  },
  twitter: { card: 'summary_large_image', images: ['/assets/og-image.png'] },
  icons: { icon: '/assets/opsdevco-logo-o-mark.png' },
}

/**
 * Pre-hydration theme bootstrap. Runs before paint so dark/light is correct
 * on first frame (no flash). Honors saved choice in localStorage, otherwise
 * falls back to the system preference.
 */
const themeBootstrap = `(()=>{try{var s=localStorage.getItem('odc-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(m?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
