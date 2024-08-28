import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { NavLink } from "react-router-dom";

const DrawerNavBar = ({ isMenuOpen, toggleMenu, linkClass }) => {
  return (
    <>
      <Drawer
        open={isMenuOpen}
        onClose={toggleMenu}
        direction='right'
        className='bg-slate-900 p-4'
      >
        <ul className="flex flex-col gap-4 items-start mb-auto">
          <li>
            <NavLink to={"/search"} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>SEARCH</NavLink>
          </li>
          <li>
            <NavLink to={"/movies"} onClick={toggleMenu} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>MOVIES</NavLink>
          </li>
          <li>
            <NavLink to={"/tv-shows"} onClick={toggleMenu} className={({ isActive }) => `${linkClass({ isActive })} hover:text-blue-500`}>TV SHOWS</NavLink>
          </li>
        </ul>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg mt-auto text-sm md:text-base">LOG IN</button>
      </Drawer>
    </>
  )
};

DrawerNavBar.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  linkClass: PropTypes.func
};

export default DrawerNavBar