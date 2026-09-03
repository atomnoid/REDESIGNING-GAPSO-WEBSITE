import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'], 
  variable: '--font-heading' 
})
const plex = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex' })

export const metadata: Metadata = {
  title: 'GAPSO School of AI — Learn to build with AI',
  description: 'AI education built around understanding and building — structured programs, small batches, and work you can explain.',
  generator: 'GAPSO AI',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f1efe9' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${plex.variable}`}>
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}

