import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://opsdevco.de'),
  themeColor: '#ffffff',
  title: { default: 'OpsDevCode | Platform Engineering Advisory', template: '%s | OpsDevCode' },
  description: 'Platform engineering advisory. AWS, GCP, EKS, Kubernetes, Terraform, agentic development.',
  openGraph: {
    title: 'OpsDevCode — platform engineering advisory',
    description: 'Platform engineering advisory. AWS, GCP, EKS, Kubernetes, Terraform, agentic development.',
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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
