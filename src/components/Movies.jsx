import React from 'react';
import axios from 'axios';
import Listing from './Listing';
import Spinner from './Spinner';
// import FilterProvider from './FilterProvider'
import Paginate from './Paginate';
// import { GenreContext } from '../contexts/GenreContext'
import { motion } from 'framer-motion';
import { sortArray } from '../data/objects';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieGenres, setMovieGenres] = useState([]);
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
        const moviesURL = `/api/movie/movies/${currentPage}?sort=${sort}&with_genres=${selectedGenres}&country=${selectedCountry}&language=${selectedLanguage}&fromDate=${fromReleaseDate}&toDate=${toReleaseDate}`;
        const apiURL = searchQuery ? `/api/search/movie/${searchQuery}/${currentPage}` : moviesURL;
        const { data: movies } = await axios.get(apiURL);
        const { data: movieGenres } = await axios.get('/api/movie/genre');
        const { data: countriesData } = await axios.get('api/filter/countries');
        const { data: languagesData } = await axios.get('api/filter/languages');

        movies.total_pages < 50 ? setPageCount(movies.total_pages) : setPageCount(50);

        setCountries(countriesData);
        setLanguages(languagesData);
        setMovieList(movies.results);
        setMovieGenres(movieGenres.genres);
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [currentPage, selectedGenres, searchQuery, sort, selectedCountry, selectedLanguage, toReleaseDate, fromReleaseDate])

  const toggleFilter = () => {
    setOpenFilter((prevState) => !prevState)
  }

  const handleGenreSelection = (e) => {
    const genreId = parseInt(e.target.value);

    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((item) => item !== genreId)
        : [...prev, genreId]
    );
  }

  const handleCountrySelection = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
  }

  const handleLanguageSelection = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
  }

  console.log(fromReleaseDate)
  console.log(toReleaseDate)

  return (
    <section className="px-4 py-10">
      <div className="m-auto flex w-[90%] flex-col min-h-screen gap-4">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-600 self-center">LATEST MOVIES</h2>
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

        {/* Filter Panel with Slide Animation */}
        <motion.div
          className="grid grid-cols-12 bg-[#16213C] overflow-hidden rounded-lg p-3 text-white/50 gap-4 "
          initial={{ height: 0, opacity: 0 }}
          animate={openFilter ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className='col-span-2'>
            <div className='space-y-2'>
              <h1 className='text-lg'>Sort By</h1>
              {sortArray.map((s) =>
                <button
                  key={s.value}
                  className={`${s.value === sort ? "bg-transparent text-blue-600 border-blue-600" : "bg-blue-600 text-slate-900 border-transparent"} hover:text-blue-600 px-5 py-1 rounded-lg border hover:border-blue-600 hover:bg-transparent transition-all duration-300 w-full`}
                  onClick={() => setSort(s.value)}
                >
                  {s.label}
                </button>)}
            </div>
            <div className='mt-4 flex flex-col gap-3'>
              <div className='space-y-2'>
                <label htmlFor='fromDate'>From</label>
                <input
                  type='date'
                  id='fromDate'
                  name='fromDate'
                  value={fromReleaseDate}
                  onChange={(e) => setFromReleaseDate(e.target.value)}
                  className='w-full py-1 rounded-lg cursor-pointer focus:ring-0 text-slate-900'
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='toDate'>To</label>
                <input
                  type='date'
                  id='toDate'
                  name='toDate'
                  value={toReleaseDate}
                  onChange={(e) => setToReleaseDate(e.target.value)}
                  className='w-full py-1 rounded-lg cursor-pointer focus:ring-0 text-slate-900'
                />
              </div>
            </div>
          </div>

          <div className='col-span-10 flex flex-col gap-4'>
            <div className='space-y-2'>
              <h1 className='text-lg'>Genre</h1>
              <div className='border border-blue-600 p-3 rounded-lg'>
                {movieGenres.map((genre) => <label key={genre.id} className='inline-flex items-center gap-2 mr-4'>
                  <input name='genre' type='checkbox' value={genre.id} className='accent-blue-600 focus:ring-0 focus:ring-offset-0 rounded' onChange={handleGenreSelection} />
                  {genre.name}
                </label>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <h1 className='text-lg'>Country</h1>
              <div className='border border-blue-600 p-3 rounded-lg h-80 overflow-y-auto scrollbar-custom'>
                {countries.sort().map((country) => <label key={country.iso_3166_1} className='inline-flex items-center gap-2 mr-4'>
                  <input
                    type='radio'
                    name='country'
                    value={country.iso_3166_1}
                    onChange={handleCountrySelection}
                    className='accent-blue-600 focus:ring-0 focus:ring-offset-0 rounded-full cursor-pointer'
                  />
                  {country.english_name}
                </label>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <h1 className='text-lg'>Language</h1>
              <div className='border border-blue-600 p-3 rounded-lg h-80 overflow-y-auto scrollbar-custom'>
                {languages.sort((a, b) => {
                  if (a.english_name < b.english_name) {
                    return -1;
                  }
                  if (a.english_name > b.english_name) {
                    return 1;
                  }
                  return 0;
                })
                  .map((language) => <label key={language.iso_639_1} className='inline-flex items-center gap-2 mr-4'>
                    <input
                      type='radio'
                      name='language'
                      value={language.iso_639_1}
                      onChange={handleLanguageSelection}
                      className='accent-blue-600 focus:ring-0 focus:ring-offset-0 rounded-full cursor-pointer'
                    />
                    {language.english_name}
                  </label>
                  )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Movies Grid with Smooth Slide */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`grid ${!loading && "grid-cols-4 md:grid-cols-5"}  gap-3 mx-auto flex-1`}
        >
          {loading ? (
            <Spinner className=' mx-auto border border-red-500' />
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
