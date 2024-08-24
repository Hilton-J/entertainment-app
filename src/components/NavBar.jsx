import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import DrawerNavBar from "./DrawerNavBar";


const NavBar = () => {
  const linkClass = ({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-600');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"} className='text-xl w-fit sm:text-2xl font-bold text-blue-600 hover:text-blue-500'>Steam-Trends</NavLink>
        <div className="hidden md:flex">
          <input type="text" placeholder="Search" id="search" className="bg-transparent text-white border border-blue-600 px-6 py-2 rounded-full text-sm md:text-base lg:w-80" />
        </div>
        <div className="md:flex hidden items-center gap-4 lg:gap-8">

          <ul className="flex md:flex-row flex-col gap-4 lg:gap-8 items-center">
            <li>
              <NavLink to={"/search"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>SEARCH</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>MOVIES</NavLink>
            </li>
            <li>
              <NavLink to={"/tv-shows"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>TV SHOWS</NavLink>
            </li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm md:text-base">LOG IN</button>
        </div>

        <div className="flex items-center md:hidden gap-4">
          <input type="text" placeholder="Search" id="search" className="bg-transparent text-blue-600 border border-blue-600 px-6 p-2 rounded-full text-sm md:text-base lg:w-80" />
          <a onClick={toggleMenu} className="text-3xl cursor-pointer text-gray-600">
            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </a>
        </div>
      </nav>

      <DrawerNavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} linkClass={linkClass} />
    </header>
  );
}

export default NavBar;
