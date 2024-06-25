import ExperienceCard from "../components/ExperienceCard/ExperienceCard"
import { Experiencia } from "../data/experiencia" 
function About() {
  return (
    <section className='flex flex-col w-full h-full gap-5 px-10 max-w-7xl mx-auto py-28 md:py-36'>
      <h2 className="md:text-5xl text-4xl font-semibold mb-10 text-[#5DBCCC]">Experiência</h2>
      <ExperienceCard data={Experiencia}/>
    </section>
  )
}

export default About