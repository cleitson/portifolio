import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


function Header() {

  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }
  return (

    <header className='flex md:gap-10 bg-gray-700 justify-around p-3'>

      <Link to={"/"}><h1 className='text-2xl text-white'>{"< "}Cleitson{" />"}</h1></Link>
      <nav className='hidden md:flex space-x-4 justify-center md:gap-10'>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contacts</Link>
      </nav>
      <button className='md:hidden text-white p-2 rounded-md z-10' onClick={handleClick}>
        {nav ? <XMarkIcon className="h-8 w-8 text-white" /> : <Bars3Icon className="h-8 w-8 text-white" />}
      </button>

      <nav className={`${nav
          ? 'text-white opacity-100 transform translate-x-0'
          : 'text-white opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800/80 text-2xl gap-5 `}>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contacts</Link>
      </nav>
    </header>

  )
}

export default Header