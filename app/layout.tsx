import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { cn } from '@/lib/utils'
import { GsapAnimations } from '@/components/gsap-animations'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ClientProviders } from '@/components/ClientProviders'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Shokhrukh Koshel - Support Analyst & Head of Support',
  description: 'Customer Support Manager with a strong technical and analytical background. Experienced in leading support teams, optimizing workflows, and implementing automation.',
  keywords: ['Shokhrukh Koshel', 'Support Analyst', 'Head of Support', 'Customer Support', 'Team Management', 'Process Automation', 'Python', 'PostgreSQL', 'Intercom', 'Dubai'],
  authors: [{ name: 'Shokhrukh Koshel' }],
  creator: 'Shokhrukh Koshel',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shokhrukh.dev',
    title: 'Shokhrukh Koshel - Support Analyst & Head of Support',
    description: 'Customer Support Manager with a strong technical and analytical background. Experienced in leading support teams, optimizing workflows, and implementing automation.',
    siteName: 'Shokhrukh Koshel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shokhrukh Koshel - Support Analyst & Head of Support',
    description: 'Customer Support Manager with a strong technical and analytical background. Experienced in leading support teams, optimizing workflows, and implementing automation.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground antialiased")}>
        {/* GSAP + ScrollTrigger via CDN (as requested) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <ClientProviders>
          <GsapAnimations />
          {children}
          <ScrollToTop />
        </ClientProviders>
      </body>
    </html>
  )
}


