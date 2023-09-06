"use client"

import { useTheme } from "@/hooks/useTheme"
import { MaterialSymbolsDarkMode, MaterialSymbolsLightModeSharp } from "./icons"

export const ThemeBtn = () => {
  const { darkMode, setDarkMode } = useTheme()
  
  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={handleClick} 
      className="opacity-80 hover:opacity-100 hover:scale-110"
    >
      {(darkMode === true) && <MaterialSymbolsLightModeSharp className="text-5xl text-yellow-300" />}
      {(darkMode === false) && <MaterialSymbolsDarkMode className="text-5xl text-yellow-300" />}
    </button>
  )
}
