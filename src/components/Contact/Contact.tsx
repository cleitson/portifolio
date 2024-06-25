import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { GoMail } from "react-icons/go";

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
        <form className="w-full h-full flex-col flex gap-5 bg-[#070D0D]" action="https://formsubmit.co/cleitson.ftw@gmail.com" method="POST">
          <input type="text" className="flex h-10 w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm focus-visible:ring-2 ring-offset-[#9AC8D0] focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Nome" name="name" required />

          <input type="email" className="flex h-10 w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm focus-visible:ring-2 ring-offset-[#9AC8D0] focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Email" name="email" required />

          <textarea className="flex min-h-[140px] w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm ring-offset-[#9AC8D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none flex-1 h-full" name="message" placeholder="Escreva sua mensagem aqui!" required />

          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://cleitson.dev.br/thanks" />

          <button type='submit' className="inline-flex items-center justify-center rounded-md bg-[#9AC8D0] text-black hover:bg-[#BEDADA] h-10 px-4 py-2 w-full text-xl font-medium">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact