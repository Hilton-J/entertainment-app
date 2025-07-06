import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom'
import { FiTrendingUp, FiTv, FiYoutube } from 'react-icons/fi'
import { RiMovie2Line } from 'react-icons/ri'

const DrawerNavBar = ({ isMenuOpen, toggleMenu }) => {
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
          className="flex items-center space-x-2 transition-all duration-700"
        >
          <FiYoutube className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-white hover:text-gray-600">CineScope</h1>
        </NavLink>
      </div>
      <div className="flex h-full flex-col p-4">
        <ul className="mb-auto flex flex-col items-start gap-4">
          <li>
            <NavLink
              to={'/'}
              className='text-gray-400 hover:text-blue-600 flex items-center space-x-2'
            >
              <FiTrendingUp />
              <span>Trending</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/movies'}
              className='text-gray-400 hover:text-blue-600 flex items-center space-x-2'
            >
              <RiMovie2Line />
              <span>Movies</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/tv'}
              className='text-gray-400 hover:text-blue-600 flex items-center space-x-2'
            >
              <FiTv />
              <span>TV Shows</span>
            </NavLink>
          </li>
        </ul>
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
