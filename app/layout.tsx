import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://filipsov.xyz'),
  title: {
    default: 'Domov | filipsov',
    template: '%s | filipsov',
  },
  description: 'Vývojář, designer a správce sociálních médií.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={font.className}>
      <body className="bg-white dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
