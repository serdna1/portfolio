"use client"

import { ThemeProvider } from '@/context/theme'
import { Navbar } from '@/app/components/navbar'

import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html 
      lang="es"
      className={`scroll-smooth ${(localStorage.getItem('darkMode') === null) ? window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark' : (localStorage.getItem('darkMode') === 'true') && 'dark'}`}
    >
      <head>
        <title>leprechaunOTD</title>
        <meta name='description' content='Portfolio de leprechaunOTD' />
      </head>
      <body className='dark:text-white'>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
