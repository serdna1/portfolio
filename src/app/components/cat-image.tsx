"use client"

import { useTheme } from "@/hooks/useTheme"

export const CatImage = () => {
  const { darkMode } = useTheme()
  
  return (
    <img 
      src={`${(darkMode === true) ? '/artemis.webp' : ''}${(darkMode === false) ? '/luna.webp' : ''}`}
      alt={`${(darkMode === true) ? 'Artemis' : ''}${(darkMode === false) ? 'Luna' : ''} cat from Sailor Moon`}
      className="h-full"
    />
  )
}
