import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import MoviesPage from './pages/MoviesPage'
import TVShowsPage from './pages/TVShowsPage'
import ViewPage from './pages/ViewPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TVShowsPage />} />
        <Route path="/:type/:id" element={<ViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
