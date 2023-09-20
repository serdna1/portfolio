import { About } from "@/app/components/about";
import { Contact } from "./components/contact";
import { FiltersProvider } from "@/context/filters";
// import { ProjectsServer } from "./components/projects-server";
import { prisma } from "@/config/prisma";
// import { getProjects } from "@/lib/get-projects";

export const dynamic = 'force-dynamic'

export default async function Home() {
  // const projects = await getProjects()

  const projects = await prisma.project.findMany({
    select: {
      id: true,
      thumbnailURL: true,
      name: true,
      description: true,
      technologies: {
        select: {
          name: true,
        }
      },
      deployURL: true,
      repoURL: true,
      slug: true
    }
  })
  
  return (
    <main>
        <About />
        <FiltersProvider>
          {/* <ProjectsServer /> */}
          <p>{projects[0].name}</p>
        </FiltersProvider>
        <Contact />
    </main>
  )
}
