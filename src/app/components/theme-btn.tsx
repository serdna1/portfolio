"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MaterialSymbolsDarkMode, MaterialSymbolsLightModeSharp } from "./icons"

export const ThemeBtn = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
      className="opacity-80 hover:opacity-100 hover:scale-110"
    >
      {(resolvedTheme === 'dark') && <MaterialSymbolsLightModeSharp className="text-5xl text-yellow-300" />}
      {(resolvedTheme === 'light') && <MaterialSymbolsDarkMode className="text-5xl text-yellow-300" />}
    </button>
  )
}
