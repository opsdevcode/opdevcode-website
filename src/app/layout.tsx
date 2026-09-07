import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  COMPANY_LOGO_SRC,
  COMPANY_OG_HEIGHT,
  COMPANY_OG_SRC,
  COMPANY_OG_WIDTH,
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
        url: COMPANY_OG_SRC,
        width: COMPANY_OG_WIDTH,
        height: COMPANY_OG_HEIGHT,
        alt: SITE_SHARE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_SHARE_TITLE,
    description: SITE_DESCRIPTION,
    images: [COMPANY_OG_SRC],
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
