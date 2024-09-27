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
// import SearchPage from './pages/SearchPage'
import ViewPage from './pages/ViewPage'
import { GenreProvider } from './contexts/GenreContext'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TVShowsPage />} />
        {/* <Route path='/search' element={<SearchPage />} /> */}
        <Route path="/:type/:id" element={<ViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  )

  return (
    <GenreProvider>
      <RouterProvider router={router} />
    </GenreProvider>
  )
}

export default App
