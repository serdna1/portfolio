import type { Metadata } from 'next'

import { Navbar } from '@/app/components/navbar'

import './globals.css'

export const metadata: Metadata = {
  title: 'leprechaunOTD',
  description: 'Portfolio de leprechaunOTD',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html 
      lang="es"
      className='scroll-smooth'
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
