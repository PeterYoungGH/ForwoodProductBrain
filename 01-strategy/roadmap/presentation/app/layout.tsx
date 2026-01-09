import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forwood One - Vision & Executive Roadmap',
  description: 'Transforming critical risk management into an intelligent, unified safety platform',
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


