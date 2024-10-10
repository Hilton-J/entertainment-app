// import PropTypes from 'prop-types'
import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import Listing from './Listing'
import Spinner from './Spinner'
import FilterProvider from './FilterProvider'
import Paginate from './Paginate'
import { GenreContext } from '../contexts/GenreContext'

const Movies = () => {
  const { selectedGenres } = useContext(GenreContext)
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  // const genreURL = useGenres(selectedGenres);

  useEffect(() => {
    const fetchMovies = async () => {
      // const apiKey = import.meta.env.VITE_API_KEY

      // let moviesURL = `/api/discover/movie/${currentPage}`;

      // if (selectedGenres) moviesURL += `/${selectedGenres}`

      try {
        const apiURL = !searchQuery
          ? `/api/discover/movie/${currentPage}/${selectedGenres}`
          : `/api/search/movie/${searchQuery}/${currentPage}`;

        const { data } = await axios.get(apiURL)
        data.total_pages < 50 ? setPageCount(data.total_pages) : setPageCount(50)
        console.log(data);
        setMovieList(data.results)
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [currentPage, selectedGenres, searchQuery])

  return (
    <section className="px-4 py-10">
      <div className="m-auto flex w-full flex-col justify-center min-h-screen">
        <h2 className="mb-5 text-center text-2xl font-bold md:text-4xl">
          LATEST MOVIES
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <FilterProvider type={'movies'} setSearchQuery={setSearchQuery}>
            {movieList.map((movie) => (
              <Listing key={movie.id} list={movie} type={'movie'} />
            ))}
          </FilterProvider>
        )}

        {pageCount > 2 && <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />}
      </div>
    </section>
  )
}

export default Movies
