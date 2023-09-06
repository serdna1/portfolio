import type { Metadata } from 'next'
import ClientLayout from './components/client-layout'

import './globals.css'

export const metadata: Metadata = {
  title: 'leprechaunOTD',
  description: 'Portfolio de leprechaunOTD',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <ClientLayout>
        {children}
      </ClientLayout>
    </>
  )
}
