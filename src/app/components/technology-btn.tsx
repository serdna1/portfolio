import { useState } from "react"
import { technologyIcons } from "./icons"
import { TechnologyBtnPropType } from "@/types"

export const TechnologyBtn = ({technology}: TechnologyBtnPropType) => {

  const [isActive, setIsActive] = useState<boolean>(false)
  
  const handleClick = () => {
    setIsActive(!isActive)
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
