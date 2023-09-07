import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/theme'
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
      suppressHydrationWarning
      className='scroll-smooth'
    >
      <body className='dark:text-white'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
