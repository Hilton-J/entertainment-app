import axios from 'axios';
import Listing from './Listing';
import Spinner from './Spinner';
import Paginate from './Paginate';
import SortBy from './filter/SortBy';
import Genres from './filter/Genres';
import { motion } from 'framer-motion';
import Countries from './filter/Countries';
import Languages from './filter/Languages';
import React, { useState, useEffect } from 'react';
import ReleaseDateForm from './filter/ReleaseDateForm';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [sort, setSort] = useState('polularity.desc');
  const [toReleaseDate, setToReleaseDate] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [fromReleaseDate, setFromReleaseDate] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesURL = `/api/movies/discover/${currentPage}?sort=${sort}&with_genres=${selectedGenres}&country=${selectedCountry}&language=${selectedLanguage}&fromDate=${fromReleaseDate}&toDate=${toReleaseDate}`;

        const apiURL = searchQuery ? `/api/search/movies/${searchQuery}/${currentPage}` : moviesURL;

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
  }, [currentPage, selectedGenres, searchQuery, sort, selectedCountry, selectedLanguage, toReleaseDate, fromReleaseDate]);

  const toggleFilter = () => {
    setOpenFilter((prevState) => !prevState)
  }

  return (
    <section className="px-4 py-10">
      <div className="m-auto flex w-[90%] flex-col min-h-screen gap-4">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-600">LATEST MOVIES</h2>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <input type="search" name='search' placeholder='Search' className='rounded-lg w-full' onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <button
              className="bg-blue-600 text-slate-900 hover:text-blue-600 hover:border-blue-600 hover:bg-transparent px-5 rounded-lg border border-transparent transition-all duration-300"
              onClick={toggleFilter}
            >
              FILTERS
            </button>
          </div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={openFilter ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="grid grid-cols-12 bg-[#1C294A] overflow-hidden rounded-lg p-3 text-white/50 gap-4 shadow-xl"
        >
          <div className='col-span-2'>
            <SortBy sort={sort} setSort={setSort} />
            <ReleaseDateForm toDate={toReleaseDate} setToDate={setToReleaseDate} fromDate={fromReleaseDate} setFromDate={setFromReleaseDate} />
          </div>

          <div className='col-span-10 flex flex-col gap-4'>
            <Genres type='movies' setSelectedGenres={setSelectedGenres} />
            <Countries setSelectedCountry={setSelectedCountry} />
            <Languages setSelectedLanguage={setSelectedLanguage} />
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`grid ${!loading && "grid-cols-2 md:grid-cols-5"}  gap-3 mx-auto flex-1`}
        >
          {loading ? (
            <Spinner className='mx-auto' />
          ) : (
            movieList.map((movie) =>
              <Listing key={movie.id} list={movie} type={"movie"} />
            )
          )}
        </motion.div>

        {pageCount > 1 && <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />}
      </div>
    </section>
  )
}

export default Movies