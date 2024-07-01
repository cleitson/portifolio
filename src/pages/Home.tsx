import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import computer from '../assets/computer-illustration.png'
import curriculo from '../assets/CleitsonLima.pdf'
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projetos/Projects";

function Home() {

  return (
    <>
      <Header />
      <section id="home" className="lg:h-screen w-full flex flex-col md:flex-row lg:flex-row items-center justify-between max-w-7xl mx-auto py-28 p-5 md:p-0">
        <div className="text w-full lg:w-1/2 flex-col mb-10 ">
          <h1 className="text-2xl lg:text-2xl">Meu nome é
            <p className="text-6xl md:text-7xl lg:text-6xl font-semibold bg-clip-text text-[#5DBCCC]">Cleitson</p>
          </h1>
          <p className="lg:text-lg text-[#BEDADA] mt-4 font-medium max-w-xl">
            Sou formado em Redes de Computadores pela UNIPLAN. Atualmente, estou aprimorando minhas habilidades como desenvolvedor web na <a href="https://www.betrybe.com/" target="_blank" className="underline hover:text-emerald-500">Trybe.</a>
            <br></br>
            Tenho me dedicado ao aprendizado e à aplicação prática de tecnologias de ponta no desenvolvimento de projetos.
            No front-end, utilizo <u>HTML, CSS e React</u> para criar interfaces envolventes e responsivas. No back-end, aprofundo meu conhecimento em <u>Node com Express, ORM Sequelize e MySQL, empregando JavaScript e TypeScript.</u>
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-10 mb-10">
            <a target="_blank" referrerPolicy="no-referrer" className="hover:scale-110 cursor-pointer" href="https://github.com/cleitson">
              <VscGithubAlt size={35} />
            </a>
            <a target="_blank" referrerPolicy="no-referrer" className="hover:scale-110 cursor-pointer" href="https://www.linkedin.com/in/cleitsonlima">
              <FaLinkedin size={35} />
            </a>
            <a target="_blank" referrerPolicy="no-referrer" className="hover:scale-110 cursor-pointer" href="mailto:cleitson.ftw@gmail.com">
              <GoMail size={35} />
            </a>
            <a target="_blank" referrerPolicy="no-referrer" className="hover:scale-110 cursor-pointer" href="https://wa.me/+5561994187777">
              <FaWhatsapp size={35} />
            </a>
          </div>
          <div className="gap-2 flex items-center flex-col md:flex-row my-5">
            <a href={curriculo} download className="inline-flex items-center justify-center bg-[#8CB5BC] text-black hover:bg-[#BEDADA] h-11 rounded-md px-8 font-bold text-xl md:w-auto w-full">
              Download Currículo
            </a>
          </div>
        </div>
        <img src={computer} alt="ilustração de um computador" />
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home