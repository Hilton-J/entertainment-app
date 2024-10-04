import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom'

const DrawerNavBar = ({ isMenuOpen, toggleMenu, linkClass }) => {
  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleMenu}
      direction="right"
      className="flex flex-col"
    >
      <div className="border-b-2 border-slate-900 bg-slate-900 p-4">
        <NavLink
          to={'/'}
          className="w-fit text-xl font-bold text-blue-600 hover:text-blue-500 sm:text-2xl"
        >
          Steam-Trends
        </NavLink>
      </div>
      <div className="flex h-full flex-col p-4">
        <ul className="mb-auto flex flex-col items-start gap-4">
          <li>
            <NavLink
              to={'/movies'}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass({ isActive })} hover:text-blue-500`
              }
            >
              MOVIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/tv'}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass({ isActive })} hover:text-blue-500`
              }
            >
              TV SHOWS
            </NavLink>
          </li>
        </ul>
        <button className="mt-auto rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 md:text-base">
          LOG IN
        </button>
      </div>
    </Drawer>
  )
}

DrawerNavBar.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  linkClass: PropTypes.func,
}

export default DrawerNavBar
