"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export const CatImage = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <img 
      src={`${(resolvedTheme === 'dark') ? '/artemis.webp' : ''}${(resolvedTheme === 'light') ? '/luna.webp' : ''}`}
      alt={`${(resolvedTheme === 'dark') ? 'Artemis' : ''}${(resolvedTheme === 'light') ? 'Luna' : ''} cat from Sailor Moon`}
      className="h-full"
    />
  )
}
