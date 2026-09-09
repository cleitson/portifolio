import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import Context from "../../context/Context";

function Header() {
  const { toggleNav, nav } = useContext(Context);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/8 bg-[#091111]/80 px-5 py-4 text-[#e7f1ef] backdrop-blur-xl md:px-10">
      <a href="#home">
        <h1 className="font-code text-xl font-bold tracking-tight transition-colors hover:text-[#63d5cc] md:text-2xl">
          {"<"}Cleitson /{">"}
        </h1>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-medium text-[#b9ccca] md:flex">
        <a href="#home" className="transition-colors hover:text-[#63d5cc]">
          Início
        </a>
        <a href="#about" className="transition-colors hover:text-[#63d5cc]">
          Sobre
        </a>
        <a href="#skills" className="transition-colors hover:text-[#63d5cc]">
          Especialidades
        </a>
        <a href="#projects" className="transition-colors hover:text-[#63d5cc]">
          Projetos
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[#63d5cc]/50 px-4 py-2 text-[#8de8df] transition hover:bg-[#63d5cc] hover:text-[#071010]"
        >
          Contato
        </a>
      </nav>
      <button className="md:hidden p-2 rounded-md z-10" onClick={toggleNav}>
        {nav ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </button>

      <nav
        className={`${
          nav
            ? "opacity-100 transform translate-x-0"
            : "opacity-0 -transform translate-y-full"
        } transition-all fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#091111]/95 text-2xl gap-7 backdrop-blur-sm`}
      >
        <a href="#home" onClick={toggleNav}>
          Inicio
        </a>
        <a href="#about" onClick={toggleNav}>
          Sobre
        </a>
        <a href="#skills" onClick={toggleNav}>
          Habilidades
        </a>
        <a href="#projects" onClick={toggleNav}>
          Projetos
        </a>
        <a href="#contact" onClick={toggleNav}>
          Contatos
        </a>
      </nav>
    </header>
  );
}

export default Header;
