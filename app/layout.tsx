import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Greek Thai Holidays | Curated Thailand. Crafted with Greek Discipline.',
  description: 'Experience the perfect fusion of Greek excellence and Thai culture. Curated holidays, crafted with precision.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/gtlogo.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
    apple: '/gtlogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
