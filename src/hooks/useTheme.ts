"use client"

import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

export function useTheme () {
  const [ darkMode, setDarkMode ] = useContext(ThemeContext)

  return { darkMode, setDarkMode }
}