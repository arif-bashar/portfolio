import type { Metadata } from 'next'
import '../styles/styles.scss'

export const metadata: Metadata = {
  title: 'Arif Bashar',
  description: 'Portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

