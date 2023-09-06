"use client"

import { ThemeProvider } from '@/context/theme'
import { Navbar } from '@/app/components/navbar'

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <html 
      lang="es"
      className={`scroll-smooth ${(localStorage.getItem('darkMode') === null) ? window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark' : (localStorage.getItem('darkMode') === 'true') && 'dark'}`}
    >
      <body className='dark:text-white'>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
