"use client"

import { useContext } from 'react'
import { FiltersContext } from '@/context/filters'
import { CardProjectWithIdType } from '@/types'

export function useFilters () {
  const [ technologyFilter, setTechnologyFilter ] = useContext(FiltersContext)

  const filterByTechnology = (projects: CardProjectWithIdType[]) => {
    if (technologyFilter === 'All Technologies')
      return projects

    return projects.filter(project => project.technologies.some(technology => (technology.name === technologyFilter)))
  }

  return { technologyFilter, filterByTechnology, setTechnologyFilter }
}