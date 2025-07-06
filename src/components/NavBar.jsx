import React, { useState } from 'react';
import DrawerNavBar from './DrawerNavBar';
import { NavLink } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { FiTv, FiTrendingUp, FiYoutube, } from "react-icons/fi";
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-600' : 'text-gray-400'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-slate-900 py-4 px-6">
      <nav className=" mx-auto flex items-center justify-between">
        <NavLink
          to={'/'}
          className="flex items-center space-x-2 transition-all duration-700"
        >
          <FiYoutube className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-white hover:text-gray-600">CineScope</h1>
        </NavLink>

        <div className="hidden items-center gap-4 md:flex lg:gap-8">
          <ul className="flex flex-col items-center gap-4 md:flex-row lg:gap-8">
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} hover:text-blue-600 flex items-center space-x-2`
                }
              >
                <FiTrendingUp />
                <span>Trending</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/movies'}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} hover:text-blue-600 flex items-center space-x-2`
                }
              >
                <RiMovie2Line />
                <span>Movies</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/tv'}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} hover:text-blue-600 flex items-center space-x-2`
                }
              >
                <FiTv />
                <span>TV Shows</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a
            onClick={toggleMenu}
            className="cursor-pointer text-3xl text-gray-600"
          >
            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </a>
        </div>
      </nav>

      <DrawerNavBar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  )
}

export default NavBar
