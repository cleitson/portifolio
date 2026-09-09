import { type ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { GrGithub } from "react-icons/gr";
import { HiArrowDownRight, HiArrowUpRight } from "react-icons/hi2";
import computer from "../../assets/computer.webp";
import curriculo from "../../assets/CleitsonLimaResume.pdf";

function Hero() {
  function socialLink(icon: ReactElement, link: string, label: string) {
    return (
      <a
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 p-3 text-[#d5e5e2] transition hover:-translate-y-1 hover:border-[#63d5cc] hover:bg-[#63d5cc] hover:text-[#071010]"
        href={link}
      >
        {<icon.type size={21} />}
      </a>
    );
  }

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-32 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
    >
      <div className="absolute right-8 top-28 -z-10 h-72 w-72 rounded-full bg-[#2d8c8d]/12 blur-3xl md:right-16" />
      <div className="w-full lg:w-3/5">
        <p className="font-code mb-5 text-sm font-semibold tracking-[0.18em] text-[#63d5cc]">
          DESENVOLVEDOR FULL STACK · BRASÍLIA, DF
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#f2f8f7] md:text-7xl">
          Interfaces que tornam{" "}
          <span className="text-[#63d5cc]">ideias reais.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#afc3c0] md:text-xl">
          Sou Cleitson Lima. Desenvolvo experiências web rápidas, responsivas e
          pensadas para gerar valor para pessoas e negócios.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#63d5cc] px-6 py-3 font-semibold text-[#071010] transition hover:bg-[#91ece4]"
          >
            Ver projetos <HiArrowDownRight size={19} />
          </a>
          <a
            href={curriculo}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-[#e7f1ef] transition hover:border-[#63d5cc] hover:text-[#63d5cc]"
          >
            Baixar currículo <HiArrowUpRight size={19} />
          </a>
        </div>
        <div className="mt-10 flex items-center gap-3">
          {socialLink(<GrGithub />, "https://github.com/cleitson", "GitHub")}
          {socialLink(
            <FaLinkedin />,
            "https://www.linkedin.com/in/cleitsonlima",
            "LinkedIn",
          )}
          {socialLink(
            <FaWhatsapp />,
            "https://wa.me/+5561994187777",
            "WhatsApp",
          )}
          {socialLink(<GoMail />, "mailto:contato@cleitson.dev.br", "E-mail")}
        </div>
      </div>
      <div className="mt-14 w-full lg:mt-0 lg:w-2/5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#102020] p-5 shadow-2xl shadow-black/30">
          <div className="mb-5 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f78872]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f7cb65]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#63d5cc]" />
          </div>
          <img
            src={computer}
            alt="Ilustração de uma estação de trabalho"
            loading="eager"
            className="mx-auto w-full max-w-md"
          />
          <p className="font-code mt-2 text-xs text-[#8ea9a5]">
            // criando produtos digitais com propósito
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
