import ProjectsCard from "../components/ProjectsCard/ProjectsCard"
import { Projetos, Voluntario } from "../data/projetos";


function Projects() {
  return (
    <section className='flex flex-col w-full h-full px-10 py-28 md:py-40'>
      <h1 className="text-4xl md:text-5xl font-semibold mb-14 text-[#5DBCCC] text-center">Projetos</h1>
      <section className="flex flex-col flex-wrap md:flex-row gap-10 mb-36">
        <ProjectsCard data={Projetos} />
      </section>
      <h1 className="text-4xl md:text-5xl font-semibold mb-14 text-[#5DBCCC] text-center">Voluntario</h1>
      <section className="flex flex-col flex-wrap md:flex-row gap-10">
        <ProjectsCard data={Voluntario} />
      </section>
    </section>
  )
}

export default Projects