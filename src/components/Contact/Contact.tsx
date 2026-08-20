import { type ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import FormContact from "../FormContact/FormContact";
import { GrMailOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";


function Contact() {

  function miniCard(title: string, icon: ReactElement, link: string) {
    return (
      <a target="_blank" referrerPolicy="no-referrer" className="flex items-center w-full md:justify-left text-xl lg:text-2xl gap-5  px-2 md:px-8 py-4 bg-[#0D1E20] rounded-xl md:hover:scale-110 cursor-pointer" href={link}>
        {icon}
        <p>{title}</p>
      </a>
    )
  }

  return (
    <section id="contact" className='flex flex-col w-full h-full px-2 max-w-7xl mx-auto py-28'>
      <h2 className="md:text-6xl text-5xl text-center font-semibold mb-14 text-[#5DBCCC]">Contato</h2>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="contacts w-full flex-col flex gap-5">
          {miniCard("Github", <GrGithub />, "https://github.com/cleitson")}
          {miniCard("Linkedin", <FaLinkedin />, "https://www.linkedin.com/in/cleitsonlima")}
          {miniCard("(61) 99418-7777", <FaWhatsapp />, "https://wa.me/+5561994187777")}
          {miniCard("contato@cleitson.dev.br", <GrMailOption />, "mailto:contato@cleitson.dev.br")}
        </div>
        <FormContact />
      </div>
    </section>
  )
}

export default Contact
