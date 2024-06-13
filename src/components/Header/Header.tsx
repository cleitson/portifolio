import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import Context from "../../context/Context";


function Header() {

  const { toggleNav, nav } = useContext(Context)

  return (

    <header className='flex items-center md:gap-10 bg-[#162121] justify-around p-3 fixed w-full'>

      <Link to={"/"}><h1 className='text-2xl md:text-3xl text-white hover:text-foreground hover:scale-110 transition-all'>{"< "}Cleitson{" />"}</h1></Link>
      <nav className='hidden text-white md:flex space-x-4 justify-center md:gap-10'>
        <Link to={"/about"} className="text-xl hover:text-foreground hover:scale-125 transition-all">Sobre</Link>
        <Link to={"/projects"} className="text-xl hover:text-foreground hover:scale-125 transition-all">Projetos</Link>
        <Link to={"/contact"} className="text-xl hover:text-foreground hover:scale-125 transition-all">Contato</Link>
      </nav>
      <button className='md:hidden text-white p-2 rounded-md z-10' onClick={toggleNav}>
        {nav ? <XMarkIcon className="h-8 w-8 text-white" /> : <Bars3Icon className="h-8 w-8 text-white" />}
      </button>

      <nav className={`${nav
        ? 'text-white opacity-100 transform translate-x-0'
        : 'text-white opacity-0 -transform translate-y-full'
        } transition-transform fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800/80 text-2xl gap-5 backdrop-blur-sm`}>
        <Link to={"/"} onClick={toggleNav}>Pagina inicial</Link>
        <Link to={"/about"} onClick={toggleNav}>Sobre</Link>
        <Link to={"/projects"} onClick={toggleNav}>Projetos</Link>
        <Link to={"/contact"} onClick={toggleNav}>Contatos</Link>
      </nav>
    </header>

  )
}

export default Header

