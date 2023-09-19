"use client"

import type { CardProjectWithIdType } from '@/types'
import { ProjectCard } from './project-card'
import { useFilters } from '@/hooks/useFilters'


export const ProjectsClient = ({initialProjects}: {initialProjects: CardProjectWithIdType[]}) => {
  const { filterByTechnology } = useFilters()

  const filterdProjects = filterByTechnology(initialProjects)

  return (
    <section className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 md:gap-4 w-full'>
      {
        filterdProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            thumbnailURL={project.thumbnailURL}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            deployURL={project.deployURL}
            repoURL={project.repoURL}
            slug={project.slug}
          />
        ))
      }
    </section>
  )
}
