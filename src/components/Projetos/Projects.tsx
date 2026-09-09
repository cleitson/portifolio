import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { Projetos, Voluntario, Freelancer } from "../../data/projetos";

function Projects() {
  const allProjects = [...Freelancer, ...Voluntario, ...Projetos];
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:px-8"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-code text-sm font-semibold tracking-[0.16em] text-[#63d5cc]">
            03 — PROJETOS SELECIONADOS
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Experiências construídas para funcionar.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[#8ea9a5]">
          Uma seleção de trabalhos profissionais, voluntários e estudos
          técnicos.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectsCard data={allProjects} />
      </div>
    </section>
  );
}

export default Projects;
