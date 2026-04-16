import type { Metadata } from 'next'
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Variable font: axes (SOFT, opsz) require weight: 'variable' per next/font rules.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://opsdevco.de'),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#08090f' },
  ],
  title: { default: 'OpsDevCode | Platform Engineering Advisory', template: '%s | OpsDevCode' },
  description:
    'Platform engineering that works in production. Practical DevOps and platform engineering for AWS, GCP, Kubernetes, and IaC. Simplify cloud operations, reduce waste, and build systems your team can actually own. No corporate speak.',
  openGraph: {
    title: 'OpsDevCode — platform engineering advisory',
    description:
      'Platform engineering that works in production. Practical DevOps and platform engineering for AWS, GCP, Kubernetes, and IaC. Simplify cloud operations, reduce waste, and build systems your team can actually own. No corporate speak.',
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
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
