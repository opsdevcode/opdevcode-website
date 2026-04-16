import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://opsdevco.de'),
  themeColor: '#ffffff',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
