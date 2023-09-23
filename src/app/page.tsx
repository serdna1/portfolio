import { About } from "@/app/components/about";
import { Contact } from "./components/contact";
import { FiltersProvider } from "@/context/filters";
import { ProjectsServer } from "./components/projects-server";

export const dynamic = 'force-dynamic'

export default async function Home() {
  
  return (
    <main>
        <About />
        <FiltersProvider>
          <ProjectsServer />
        </FiltersProvider>
        <Contact />
    </main>
  )
}
