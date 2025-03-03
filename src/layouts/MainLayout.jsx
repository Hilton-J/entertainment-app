import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <section className='bg-slate-900'>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </section>
  )
}

export default MainLayout
