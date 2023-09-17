"use client"

import { useTheme } from "next-themes"
import { MaterialSymbolsDarkMode, MaterialSymbolsLightModeSharp } from "./icons"

export const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
      className="opacity-80 hover:opacity-100 hover:scale-110"
    >
      <MaterialSymbolsLightModeSharp className="hidden dark:inline text-5xl text-yellow-300" />
      <MaterialSymbolsDarkMode className="inline dark:hidden text-5xl text-yellow-300" />
    </button>
  )
}
