import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_DESCRIPTION, SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'OpsDevCode | Infrastructure for modern engineering organizations',
    template: '%s | OpsDevCode',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: 'OpsDevCode — Infrastructure for modern engineering organizations',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpsDevCode — Infrastructure for modern engineering organizations.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpsDevCode — Infrastructure for modern engineering organizations',
    description: SITE_DESCRIPTION,
    images: ['/assets/og-image.png'],
  },
  icons: { icon: '/assets/opsdevco-logo-o-terminal.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
