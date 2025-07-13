import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Space_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Waste Sorting Game',
  description: 'Learn how to properly sort waste into correct categories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={spaceMono.variable}>
      <body className="font-space-mono">
        {children}
      </body>
    </html>
  )
}