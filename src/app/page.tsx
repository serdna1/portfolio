import { About } from "@/app/components/about";
import { Contact } from "./components/contact";
import { FiltersProvider } from "@/context/filters";
import { ProjectsServer } from "./components/projects-server";

export default function Home() {
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
