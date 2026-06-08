import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Downtime Insurance — Get Paid When APIs Go Down',
  description: 'Monitor critical APIs and automatically file SLA breach claims with vendors. Track compensation owed to your SaaS business.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bba7f40b-7404-410e-802f-bc00be425106"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
