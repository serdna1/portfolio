"use client"

import { createContext, useState, useEffect } from 'react'

type DarkModeType = boolean | undefined
type ThemeContextType = [DarkModeType, React.Dispatch<React.SetStateAction<DarkModeType>>];

export const ThemeContext = createContext<ThemeContextType>([undefined, () => null]);

export function ThemeProvider ({ children }: {children: React.ReactNode}) {
  const [darkMode, setDarkMode] = useState<DarkModeType>(undefined)

  useEffect(() => {
    if (darkMode === true){
      localStorage.setItem('darkMode', 'true')
      document.documentElement.classList.add('dark')
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', 'false')
      document.documentElement.classList.remove('dark')
    } else if (localStorage.getItem('darkMode') === null) {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    } else {
      setDarkMode(localStorage.getItem('darkMode') === 'true')
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={[
      darkMode,
      setDarkMode
    ]}
    >
      {children}
    </ThemeContext.Provider>
  )
}