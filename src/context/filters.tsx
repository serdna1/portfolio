"use client"

import { createContext, useState } from 'react'

type TechnologyFilterType = string
type FiltersContextType = [TechnologyFilterType, React.Dispatch<React.SetStateAction<TechnologyFilterType>>];

export const FiltersContext = createContext<FiltersContextType>(['', () => null]);

export function FiltersProvider ({ children }: {children: React.ReactNode}) {
  const [technologyFilter, setTechnologyFilter] = useState<TechnologyFilterType>('All Technologies')

  return (
    <FiltersContext.Provider value={[
      technologyFilter,
      setTechnologyFilter
    ]}
    >
      {children}
    </FiltersContext.Provider>
  )
}