import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="flex h-[60vh] flex-col items-center justify-center text-center md:h-[80vh]">
      <FaExclamationTriangle className="fa-4x mb-4 text-3xl text-yellow-400 md:text-6xl" />
      <h1 className="mb-4 text-3xl font-bold md:text-6xl">404 Not Found</h1>
      <p className="mb-5 text-base md:text-xl">This page does not exist</p>
      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 md:text-base"
      >
        Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage
