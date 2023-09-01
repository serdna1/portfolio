"use client"

import { useContext } from 'react'
import { FiltersContext } from '@/context/filters'
import { ProjectType } from '@/types'

export function useFilters () {
  const [ technologyFilter, setTechnologyFilter ] = useContext(FiltersContext)

  const filterByTechnology = (projects: ProjectType[]) => {
    if (technologyFilter === 'All Technologies')
      return projects

    return projects.filter(project => project.technologies.includes(technologyFilter))
  }

  return { technologyFilter, filterByTechnology, setTechnologyFilter }
}