import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '@MrJPTech | Jordan Ward - CEO of PRSMTECH',
  description: 'Follow Jordan Ward across all social media platforms. CEO of PRSMTECH - Tech entrepreneur, content creator, and developer.',
  keywords: ['MrJPTech', 'Jordan Ward', 'PRSMTECH', 'Tech CEO', 'Content Creator', 'Developer', 'Twitch', 'YouTube', 'TikTok'],
  authors: [{ name: 'Jordan Ward', url: 'https://prsmtechweb.com' }],
  creator: 'PRSMTECH',
  publisher: 'PRSMTECH',
  openGraph: {
    title: '@MrJPTech | Jordan Ward - CEO of PRSMTECH',
    description: 'Follow Jordan Ward across all social media platforms. Tech CEO, content creator, and developer.',
    url: 'https://links.prsmtechweb.com',
    siteName: 'MrJPTech Links',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MrJPTech - Jordan Ward - PRSMTECH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '@MrJPTech | Jordan Ward - CEO of PRSMTECH',
    description: 'Follow Jordan Ward across all social media platforms.',
    creator: '@MrJPTech',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#1e1b4b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
