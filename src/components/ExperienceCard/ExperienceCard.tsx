import { ExperienciaType } from "../../types";

type CardProps = {
  data: ExperienciaType[];
};

function ExperienceCard({ data }: CardProps) {
  return data.map((exp) => (
    <div className="flex flex-col w-10/12 bg-[#0D1E20] p-3 rounded-xl md:hover:scale-110" key={exp.id}>
      <h1 className="text-2xl font-semibold">{exp.title}</h1>
      <p className="text-sm text-gray-400">{exp.company}</p>
      <p className="text-sm text-gray-400">{exp.date}</p>
      {exp.local && <p className="text-sm text-gray-400">{exp.local}</p>}
      <p className="text-base mt-5">{exp.description}</p>
      {exp.competencies && <div className="flex mt-5 gap-2">
        <p className="text-base font-semibold">Competências: </p>
        <p className="text-base text-gray-200"> {exp.competencies}</p>
      </div>}
      
    </div>
  ));
}

export default ExperienceCard