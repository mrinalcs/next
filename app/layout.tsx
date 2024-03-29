import type { Metadata } from 'next'
import './globals.css'


import { Navbar } from '@/app/components/nav';


export const metadata: Metadata = {
  title: 'home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
