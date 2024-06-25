import ProjectsCard from "../ProjectsCard/ProjectsCard"
import { Projetos, Voluntario } from "../../data/projetos";


function Projects() {
  return (
    <section id="projects" className="lg:min-h-screen max-w-7xl mx-auto p-10  py-28">
      <h1 className="md:text-6xl text-5xl font-semibold mb-10 text-[#5DBCCC]">Projetos</h1>
      <section className="flex flex-col flex-wrap md:flex-row gap-10 mb-36">
        <ProjectsCard data={Projetos} />
      </section>
      <h1 className="md:text-6xl text-5xl font-semibold mb-10 text-[#5DBCCC]">Voluntário</h1>
      <section className="flex flex-col flex-wrap md:flex-row gap-10">
        <ProjectsCard data={Voluntario} />
      </section>
    </section>
  )
}

export default Projects