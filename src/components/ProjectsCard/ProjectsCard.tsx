import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import DevIcons from "../../data/devIcons";
import { ProjetoType } from "../../types";

type CardProps = {
  data: ProjetoType[];
};

function ProjectsCard({ data }: CardProps) {
  return data.map((projeto) => (
    <div className="flex flex-col justify-around flex-wrap md:w-[21rem] gap-5 bg-[#0D1E20] p-3 rounded-xl md:hover:scale-110" key={projeto.id}>
      <h2 className="text-2xl font-semibold text-center">{projeto.title}</h2>
      {projeto.image && <img className="rounded-xl shadow-xl w-96"
        src={projeto.image} alt="imagem do projeto" />}
      <div className="flex justify-evenly flex-wrap gap-3">
        {projeto.stack.map((stackName, index) => {
          const StackComponent = DevIcons[stackName];
          return <StackComponent key={index} size={35} />;
        })}
      </div>
      <p>{projeto.description}</p>
      <div className="flex gap-5 justify-end">
        { projeto.github && <a href={projeto.github} target="_blank"><VscGithubAlt size={35} /></a>}
        { projeto.link && <a href={projeto.link} target="_blank"><FiExternalLink size={35} /></a>}
      </div>
    </div>
  ));
}

export default ProjectsCard