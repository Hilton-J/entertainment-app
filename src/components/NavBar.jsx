import { NavLink } from 'react-router-dom'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react'
import DrawerNavBar from './DrawerNavBar'

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-600' : 'text-gray-600'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-slate-900">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <NavLink
          to={'/'}
          className="w-fit text-xl font-bold text-blue-600 hover:text-blue-500 sm:text-2xl"
        >
          Steam-Trends
        </NavLink>
        <div className="hidden items-center gap-4 md:flex lg:gap-8">
          <ul className="flex flex-col items-center gap-4 md:flex-row lg:gap-8">
            <li>
              <NavLink
                to={'/movies'}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} hover:text-blue-500`
                }
              >
                MOVIES
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/tv-shows'}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} hover:text-blue-500`
                }
              >
                TV SHOWS
              </NavLink>
            </li>
          </ul>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 md:text-base">
            LOG IN
          </button>
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
        linkClass={linkClass}
      />
    </header>
  )
}

export default NavBar
