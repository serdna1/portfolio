"use client"

import type { ProjectType } from '@/types'
import { projects as initialProjects } from '@/projects.json'
import { ProjectCard } from './project-card'
import { Filters } from './filters'
import { useFilters } from '@/hooks/useFilters'

export const Projects = () => {
  const { filterByTechnology } = useFilters()
  
  const filterdProjects = filterByTechnology(initialProjects as ProjectType[])

  return (
    <section 
      id='projects'
      className="flex flex-col items-center justify-center gap-10 md:gap-24 py-10 px-2 bg-[#fafafaff] dark:bg-[#111111ff] min-h-screen border-b-[1px] border-b-[#eaeaeaff] dark:border-b-[#333333ff] border-t-[1px] border-t-[#eaeaeaff] dark:border-t-[#333333ff]"
    >
      <h1 className="text-5xl font-semibold">Proyectos</h1>
      <Filters />
      <section className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-2 w-full'>
        {
          filterdProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              screenshot={project.screenshots[0]}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              deployUrl={project.deployUrl}
              repoUrl={project.repoUrl}
              slug={project.slug}
            />
          ))
        }
      </section>
    </section>
  )
}
