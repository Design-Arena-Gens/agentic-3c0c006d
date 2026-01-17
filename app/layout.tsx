import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Receptionist System',
  description: 'Production-ready AI voice receptionist that answers calls, qualifies leads, and books appointments automatically',
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
