import { useEffect, useState } from "react"
import { technologyIcons } from "./icons"
import { TechnologyBtnPropType } from "@/types"
import { useFilters } from "@/hooks/useFilters"

export const TechnologyBtn = ({technology}: TechnologyBtnPropType) => {
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
      className={`py-2 px-3 rounded-full hover:scale-105 ${isActive ? 'bg-green-200': 'bg-white'}`}
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
