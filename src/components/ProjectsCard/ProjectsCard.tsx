import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import DevIcons from "../../data/devIcons";
import { ProjetoType } from "../../types";

type CardProps = { data: ProjetoType[] };

function ProjectsCard({ data }: CardProps) {
  return data.map((projeto) => (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b1b] transition duration-300 hover:-translate-y-1 hover:border-[#63d5cc]/55"
      key={`${projeto.category}-${projeto.id}`}
    >
      {projeto.image ? (
        <div className="aspect-[16/9] overflow-hidden bg-[#132827]">
          <img
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            src={projeto.image}
            alt={`Prévia do projeto ${projeto.title}`}
            width={1280}
            height={720}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="font-code flex aspect-[16/9] items-end bg-gradient-to-br from-[#163836] to-[#0a1515] p-6 text-sm text-[#8de8df]">
          <span>
            const project = {"{"}
            <br />
            &nbsp;solution: "Gemini Vision API"
            <br />
            {"}"};
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="rounded-full border border-[#63d5cc]/30 bg-[#63d5cc]/10 px-3 py-1 text-xs font-semibold text-[#8de8df]">
            {projeto.category}
          </span>
          <div className="flex gap-3">
            {projeto.github && (
              <a
                aria-label={`Código de ${projeto.title}`}
                href={projeto.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#aec5c2] transition hover:text-[#63d5cc]"
              >
                <GrGithub size={19} />
              </a>
            )}
            {projeto.link && (
              <a
                aria-label={`Abrir ${projeto.title}`}
                href={projeto.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#aec5c2] transition hover:text-[#63d5cc]"
              >
                <FiExternalLink size={21} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {projeto.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-[#afc3c0]">
          {projeto.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {projeto.stack.map((stackName) => {
            const StackComponent = DevIcons[stackName];
            return (
              <span
                key={stackName}
                title={stackName}
                className="rounded-md border border-white/8 p-1.5"
              >
                <StackComponent size={18} fill="#dce9e6" />
              </span>
            );
          })}
        </div>
      </div>
    </article>
  ));
}

export default ProjectsCard;
