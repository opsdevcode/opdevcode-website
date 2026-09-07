import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  COMPANY_BANNER_SRC,
  COMPANY_LOGO_SRC,
  SITE_DESCRIPTION,
  SITE_SHARE_TITLE,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `OpsDevCode | ${SITE_TAGLINE.replace(/\.$/, '')}`,
    template: '%s | OpsDevCode',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_SHARE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: COMPANY_BANNER_SRC,
        width: 1280,
        height: 720,
        alt: SITE_SHARE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_SHARE_TITLE,
    description: SITE_DESCRIPTION,
    images: [COMPANY_BANNER_SRC],
  },
  icons: { icon: COMPANY_LOGO_SRC },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
