import DevIcons from "../../data/devIcons";
import imageCodeSkills from "../../assets/codeskillsimage.svg";

function Skills() {
  const groups = [
    {
      title: "Front-end",
      skills: [
        "React",
        "NextJs",
        "Typescript",
        "Javascript",
        "Html",
        "Css",
        "Tailwind",
      ],
    },
    { title: "Back-end", skills: ["NodeJs", "Express", "Prisma", "MySQL"] },
    { title: "Ferramentas", skills: ["Docker", "Git"] },
  ];
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:px-8"
    >
      <div className="mb-12 max-w-2xl">
        <p className="font-code text-sm font-semibold tracking-[0.16em] text-[#63d5cc]">
          02 — ESPECIALIDADES
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Uma stack para levar a ideia até o produto.
        </h2>
      </div>
      <section className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <img
          src={imageCodeSkills}
          alt="Ilustração de código"
          className="mx-auto w-full max-w-md opacity-90"
        />
        <div className="space-y-7">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8ea9a5]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((stackName) => {
                  const StackComponent = DevIcons[stackName];
                  return (
                    <div
                      key={stackName}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1b1b] px-4 py-2.5 text-sm text-[#dce9e6] transition hover:-translate-y-0.5 hover:border-[#63d5cc]/60"
                    >
                      <StackComponent size={22} fill="#e7f1ef" />
                      <p>{stackName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Skills;
