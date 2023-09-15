import { Filters } from './filters'
import { ProjectsClient } from "./projects-client"
import { getProjects } from '@/lib/db-queries'

export const ProjectsServer = async () => {
  const projects = await getProjects()

  const uniqueTechnologies: string[] = [
    'All Technologies',
    ...new Set(projects.map(p => p.technologies).flat())
  ]

  return (
    <section 
      id='projects'
      className="flex flex-col items-center justify-center gap-10 md:gap-24 py-10 px-2 md:px-4 bg-[#fafafaff] dark:bg-[#111111ff] min-h-screen border-b-[1px] border-b-[#eaeaeaff] dark:border-b-[#333333ff] border-t-[1px] border-t-[#eaeaeaff] dark:border-t-[#333333ff]"
    >
      <h1 className="text-5xl font-semibold">Proyectos</h1>
      <Filters uniqueTechnologies={uniqueTechnologies}/>
      <ProjectsClient initialProjects={projects} />
    </section>
  )
}
