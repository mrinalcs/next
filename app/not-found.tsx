import Link from 'next/link'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Not Found',
  description: '404: This page could not be found.',
}

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}