import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import Context from "../../context/Context";


function Header() {

  const { toggleNav, nav } = useContext(Context)

  return (

    <header className='flex items-center md:gap-10 bg-[#162121] justify-between md:justify-around p-3 px-8 fixed w-full text-[#BEDADA]'>
      <a href="#home">
        <h1 className='text-2xl md:text-3xl hover:text-foreground hover:scale-110 transition-all cursor-pointer'>{"<"}Cleitson{" />"}</h1>
      </a>
      <nav className='hidden md:flex space-x-4 justify-center md:gap-10'>
        <a href="#skills" className="text-xl hover:text-foreground hover:scale-125 transition-all cursor-pointer">Habilidades</a>
        <a href="#projects" className="text-xl hover:text-foreground hover:scale-125 transition-all cursor-pointer">Projetos</a>
        <a href="#contact" className="text-xl hover:text-foreground hover:scale-125 transition-all cursor-pointer">Contato</a>
      </nav>
      <button className='md:hidden p-2 rounded-md z-10' onClick={toggleNav}>
        {nav ? <XMarkIcon className="h-8 w-8 text-white" /> : <Bars3Icon className="h-8 w-8 text-white" />}
      </button>

      <nav className={`${nav
        ? 'opacity-100 transform translate-x-0'
        : 'opacity-0 -transform translate-y-full'
        } transition-transform fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800/80 text-2xl gap-5 backdrop-blur-sm`}>
        <a href="#home" onClick={toggleNav}>Inicio</a>
        <a href="#skills" onClick={toggleNav}>Habilidades</a>
        <a href="#projects" onClick={toggleNav}>Projetos</a>
        <a href="#contact" onClick={toggleNav}>Contatos</a>
      </nav>
    </header>

  )
}

export default Header

