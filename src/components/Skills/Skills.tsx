import DevIcons from "../../data/devIcons"
import imageCodeSkills from "../../assets/codeskillsimage.svg"

function Skills() {
  return (
    <>
      <section id="skills" className="lg:min-h-screen max-w-7xl mx-auto p-10  py-28">
        <h2 className="md:text-6xl text-5xl font-semibold mb-10 text-[#5DBCCC]">Habilidades</h2>
        <section className="flex flex-col lg:flex-row w-full items-center gap-5">
          <img src={imageCodeSkills} alt="ilustração de um computador" width={500} />
          <div className="flex justify-evenly flex-wrap">
            {Object.keys(DevIcons).map((stackName, index) => {
              const StackComponent = DevIcons[stackName];
              return <div key={index} className="flex flex-col items-center gap-2 m-5 md:hover:scale-110">
                <StackComponent size={50} />
                <p className="text-xl">{stackName}</p>
              </div>;
            })}
          </div>
        </section>
      </section>
    </>
  )
}

export default Skills