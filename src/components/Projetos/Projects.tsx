import ProjectsCard from "../ProjectsCard/ProjectsCard"
import { Projetos, Voluntario } from "../../data/projetos";


function Projects() {
  return (
    <section id="projects" className="lg:min-h-screen lg:w-4/5 mx-auto  p-5  py-28">
      <h1 className="md:text-6xl text-5xl text-center font-semibold mb-12 text-[#5DBCCC]">Voluntário</h1>
      <section className="flex flex-col flex-wrap md:flex-row gap-10 mb-12">
        <ProjectsCard data={Voluntario} />
      </section>
      <h1 className="md:text-6xl text-5xl text-center font-semibold mb-12 text-[#5DBCCC]">Projetos</h1>
      <section className="flex flex-col flex-wrap md:flex-row gap-10 mb-12">
        <ProjectsCard data={Projetos} />
      </section>
    </section>
  )
}

export default Projects