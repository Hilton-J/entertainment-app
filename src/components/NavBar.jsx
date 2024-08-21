import { NavLink } from "react-router-dom"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react'

const NavBar = () => {
  const linkClass = ({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-600');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"} className='text-xl w-fit sm:text-2xl font-bold text-blue-600 hover:text-blue-500'>Steam-Trends</NavLink>

        <div className={`md:static absolute bg-slate-900 md:min-h-fit min-h-[30vh] left-0 ${isMenuOpen ? 'top-[55px]' : 'top-[100%]'} md:w-auto w-full flex items-center justify-center px-5`}>

          <ul className="flex md:flex-row flex-col gap-4 lg:gap-8 items-center">
            <li className="m-0"><NavLink to={"/"}
              className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>HOME</NavLink></li>
            <li><NavLink to={"/now-playing"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>NOW PLAYING</NavLink></li>
            <li><NavLink to={"/popular"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>POPULAR</NavLink></li>
            <li><NavLink to={"/tv-shows"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>TV SHOWS</NavLink></li>
          </ul>

        </div>

        <div className="flex items-center gap-4">

          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg block text-sm md:text-base">SUBSCRIBE</button>
          <a onClick={toggleMenu} className="text-3xl cursor-pointer text-gray-600 md:hidden">
            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </a>

        </div>
      </nav>
    </header>
  )
}

export default NavBar