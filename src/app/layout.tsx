import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://opsdevco.de'),
  themeColor: '#ffffff',
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
  icons: { icon: '/assets/opsdevco-logo-o-terminal.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
