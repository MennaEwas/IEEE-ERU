import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IEEE Student Organization',
  description: 'IEEE Student Organization Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
