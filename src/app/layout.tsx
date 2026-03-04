import type { Metadata } from 'next'
import { JetBrains_Mono, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://opsdevco.de'),
  themeColor: '#0a0a0a',
  title: { default: 'OpsDevCo | Platform Engineering Advisory', template: '%s | OpsDevCo' },
  description: 'Platform engineering advisory. AWS, GCP, EKS, Terraform, Karpenter, agentic development.',
  openGraph: {
    title: 'OpsDevCo — platform engineering advisory',
    description: 'Platform engineering advisory. AWS, GCP, EKS, Terraform, Karpenter, agentic development.',
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
    <html lang="en" className={`${jetbrainsMono.variable} ${sourceSans.variable}`} style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
    </html>
  )
}
