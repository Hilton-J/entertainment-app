// import PropTypes from 'prop-types'
import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import Listing from './Listing'
import Spinner from './Spinner'
// import FilterProvider from './FilterProvider'
import Paginate from './Paginate'
import { GenreContext } from '../contexts/GenreContext'
import { motion } from "framer-motion";
import { sortArray } from '../data/objects'

const Movies = () => {
  const { selectedGenres } = useContext(GenreContext)
  const [openFilter, setOpenFilter] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('polularity.desc');
  // const genreURL = useGenres(selectedGenres);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesURL = selectedGenres.length > 0 ?
          `/api/movie/dicover/${currentPage}/genres/${selectedGenres}` : `/api/movie/movies/${currentPage}`;
        const apiURL = searchQuery
          ? `/api/search/movie/${searchQuery}/${currentPage}` : moviesURL;

        const { data: movies } = await axios.get(apiURL);
        movies.total_pages < 50 ? setPageCount(movies.total_pages) : setPageCount(50);
        setMovieList(movies.results);
        const { data: movies } = await axios.get(apiURL);
        movies.total_pages < 50 ? setPageCount(movies.total_pages) : setPageCount(50);
        setMovieList(movies.results);

      } catch (error) {
        console.error('Error fetching movie data: ', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [currentPage, selectedGenres, searchQuery])

  const toggleFilter = () => {
    setOpenFilter((prevState) => !prevState)
  }

  return (
    <section className="px-4 py-10">
      <div className="m-auto flex w-[90%] flex-col min-h-screen gap-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-blue-600">LATEST MOVIES</h2>
          <button
            className="bg-blue-600 text-slate-900 hover:text-blue-600 hover:border-blue-600 hover:bg-transparent px-5 rounded-lg border border-transparent transition-all duration-300"
            onClick={toggleFilter}
          >
            FILTERS
          </button>
        </div>

        {/* Filter Panel with Slide Animation */}
        <motion.div
          className="grid grid-cols-12 border overflow-hidden rounded-lg p-3 text-white/50 text-2xl gap-4"
          initial={{ height: 0, opacity: 0 }}
          animate={openFilter ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className='border col-span-2 space-y-2'>
            <h1>Sort By</h1>
            {sortArray.map((s) =>
              <button
                key={s.value}
                className="bg-blue-600 text-slate-900 hover:text-blue-600 px-5 py-1 rounded-lg border border-transparent hover:border-blue-600 hover:bg-transparent transition-all duration-300 w-full text-xl"
              >
                {s.label}
              </button>)}
          </div>
          <div className='col-span-10 flex flex-col gap-4'>
            <div className='border border-red-500'>
              <h1>Release</h1>
            </div>
            <div className='border border-blue-500'>
              <h1>Genre</h1>
            </div>
            <div className='border border-green-500'>
              <h1>Country</h1>
            </div>
            <div className='border border-lime-500'>
              <h1>Language</h1>
            </div>
          </div>
        </motion.div>

        {/* Movies Grid with Smooth Slide */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 mx-auto min-h-screen"
        >
          {loading ? (
            <Spinner className='col-span-full mx-auto' />
          ) : (
            movieList.map((movie) => <Listing key={movie.id} list={movie} type={"movie"} />)
          )}
        </motion.div>

        {pageCount > 1 && <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />}
      </div>
    </section>
  )
}

export default Movies
