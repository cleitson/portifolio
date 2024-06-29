import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import FormContact from "../FormContact/FormContact";

function Contact() {
  return (
    <section id="contact" className='flex flex-col w-full h-full px-10 max-w-7xl mx-auto py-28 md:py-52'>
      <h2 className="md:text-6xl text-5xl font-semibold mb-10 text-[#5DBCCC]">Contatos</h2>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="contacts w-full flex-col flex gap-5">
          <a target="_blank" referrerPolicy="no-referrer" className="flex items-center w-full justify-left text-xl lg:text-2xl gap-5 font-bold px-8 py-4 bg-[#0D1E20] rounded-xl md:hover:scale-110 cursor-pointer" href="https://github.com/cleitson">
            <VscGithubAlt size={35} />
            <p>Github</p>
          </a>
          <a target="_blank" referrerPolicy="no-referrer" className="flex items-center w-full justify-left text-xl lg:text-2xl gap-5 font-bold px-8 py-4 bg-[#0D1E20] rounded-xl md:hover:scale-110 cursor-pointer" href="https://www.linkedin.com/in/cleitsonlima">
            <FaLinkedin size={35} />
            <p>LinkedIn</p>
          </a>
          <a target="_blank" referrerPolicy="no-referrer" className="flex items-center w-full justify-left text-xl lg:text-2xl gap-5 font-bold px-8 py-4 bg-[#0D1E20] rounded-xl md:hover:scale-110 cursor-pointer" href="https://wa.me/+5561994187777">
            <FaWhatsapp size={35} />
            <p>(61) 99418-7777</p>
          </a>
          <span className='flex items-center w-full justify-left text-sm lg:text-2xl gap-5 font-bold px-8 py-4 bg-[#0D1E20] rounded-xl hover:scale-110'>
            <a target="_blank" referrerPolicy="no-referrer" href="mailto:cleitson.ftw@gmail.com">
              <GoMail size={35} />
            </a>
            <p>cleitson.ftw@gmail.com</p>
          </span>
        </div>
        <FormContact />
      </div>
    </section>
  )
}

export default Contact