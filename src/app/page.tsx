import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <main>
        <About />
        <Projects />
        <Contact />
    </main>
  )
}
