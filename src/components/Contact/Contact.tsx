import { type ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import FormContact from "../FormContact/FormContact";
import { GrMailOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

function Contact() {
  function miniCard(title: string, icon: ReactElement, link: string) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center gap-5 rounded-2xl border border-white/10 bg-[#0d1b1b] px-5 py-4 text-lg text-[#dce9e6] transition hover:-translate-y-1 hover:border-[#63d5cc]/60 md:px-7"
        href={link}
      >
        {icon}
        <p>{title}</p>
      </a>
    );
  }

  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-7xl flex-col px-5 py-24 md:px-10 lg:px-8"
    >
      <div className="mb-12 max-w-2xl">
        <p className="font-code text-sm font-semibold tracking-[0.16em] text-[#63d5cc]">
          04 — CONTATO
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Vamos construir algo útil juntos.
        </h2>
        <p className="mt-4 text-lg text-[#afc3c0]">
          Tem uma oportunidade, projeto ou ideia? Entre em contato.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="contacts w-full flex-col flex gap-5">
          {miniCard("Github", <GrGithub />, "https://github.com/cleitson")}
          {miniCard(
            "Linkedin",
            <FaLinkedin />,
            "https://www.linkedin.com/in/cleitsonlima",
          )}
          {miniCard(
            "(61) 99418-7777",
            <FaWhatsapp />,
            "https://wa.me/+5561994187777",
          )}
          {miniCard(
            "contato@cleitson.dev.br",
            <GrMailOption />,
            "mailto:contato@cleitson.dev.br",
          )}
        </div>
        <FormContact />
      </div>
    </section>
  );
}

export default Contact;
