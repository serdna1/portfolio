"use client"

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
