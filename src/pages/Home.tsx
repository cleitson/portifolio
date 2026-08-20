import { type ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import computer from '../assets/computer.webp';
import curriculo from '../assets/CleitsonLima.pdf';
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projetos/Projects";
import { GrGithub } from "react-icons/gr";

function Home() {

  function miniIcon(icon: ReactElement, link: string) {
    return (
      <a target="_blank" referrerPolicy="no-referrer" className="hover:scale-110 cursor-pointer" href={link}>
        {<icon.type size={35} />}
      </a>
    )
  }

  return (
    <>
      <Header />
      <section id="home" className="xl:h-screen w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-32 md:py-40 p-4 md:p-11 xl:p-0">
        <div className="text w-full lg:w-1/2 flex-col mb-10 ">
          <h1 className="text-2xl lg:text-2xl">Olá, eu sou
            <p className="text-6xl md:text-7xl lg:text-6xl font-semibold bg-clip-text text-[#5DBCCC]">Cleitson</p>
          </h1>
          <h2 className="text-xl lg:text-2xl">
            Desenvolvedor Web Full Stack
          </h2>
          <p className="lg:text-lg text-[#BEDADA] mt-4 font-medium max-w-xl">
            Desenvolvendo sites e sistemas web modernos e responsivos com ReactJs, NextJs e NodeJs. Transformo ideias em soluções que impulsionam negócios.
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-10 mb-5">
            { miniIcon(<GrGithub />, "https://github.com/cleitson") }
            { miniIcon(<FaLinkedin />, "https://www.linkedin.com/in/cleitsonlima") }
            { miniIcon(<FaWhatsapp />, "https://wa.me/+5561994187777") }
            { miniIcon(<GoMail />, "mailto:contato@cleitson.dev.br") }            
          </div>
          <div className="gap-2 flex items-center flex-col md:flex-row my-5">
            <a href={curriculo} download className="inline-flex text-nowrap items-center justify-center bg-[#8CB5BC] text-black hover:bg-[#BEDADA] h-11 rounded-md px-8 font-bold text-xl md:w-auto w-full">
              Download Currículo
            </a>
          </div>
        </div>
        <img src={computer} width={439} height={326} alt="ilustração de um computador" loading="eager" />
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
