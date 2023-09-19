"use client"

import { useEffect, useState } from "react"
import { technologyIcons } from "./icons"
import { useFilters } from "@/hooks/useFilters"

export const TechnologyBtn = ({technology}: {technology: string}) => {
  const [isActive, setIsActive] = useState<boolean>(technology === 'All Technologies')
  const { technologyFilter, setTechnologyFilter } = useFilters()
  
  useEffect(() => {
    isActive && (technologyFilter !== technology) && setIsActive(false) 
  }, [technologyFilter])
  
  
  const handleClick = () => {
    setIsActive(true)
    setTechnologyFilter(technology)
  }
  
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-3 rounded-full hover:scale-105 ${isActive ? 'bg-green-200 text-black': 'bg-black dark:bg-white text-white dark:text-black'}`}
    >
      <div className="flex gap-2 items-center">
        <div className="text-lg">
          {(technologyIcons as any)[technology]}
        </div>
        <div>
          {technology}
        </div>
      </div>
    </button>
  )
}
