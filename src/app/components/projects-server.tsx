import { getHost } from '@/config/config'
import { Filters } from './filters'
import { ProjectsClient } from "./projects-client"
import { CardProjectWithIdType } from '@/types'

async function getProjects() {
  const res = await fetch(`${getHost()}/api/projects`, { cache: 'no-store' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  const projects = json.map((element: any) => ({
    id: element.project_id,
    thumbnail: element.url,
    name: element.project_name,
    description: element.project_description,
    technologies: element.technologies,
    deployUrl: element.deploy_url,
    repoUrl: element.repo_url,
    slug: element.slug
  }))
 
  return projects
}

export const ProjectsServer = async () => {
  const projects: CardProjectWithIdType[] = await getProjects()

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
