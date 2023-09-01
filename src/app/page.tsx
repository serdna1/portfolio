import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Contact } from "./components/contact";
import { FiltersProvider } from "@/context/filters";

export default function Home() {
  return (
    <main>
        <About />
        <FiltersProvider>
          <Projects />
        </FiltersProvider>
        <Contact />
    </main>
  )
}
