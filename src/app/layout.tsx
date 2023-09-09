import type { Metadata } from 'next'
import { dancingScript, roboto_mono } from '@/fonts'
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
      className={`scroll-smooth ${dancingScript.variable} ${roboto_mono.variable} font-roboto-mono`}
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
