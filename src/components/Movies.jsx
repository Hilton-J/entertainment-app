import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import Listing from './Listing'

const Movies = ({ isHome = false }) => {

  const [movieList, setMovieList] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=5db68074253f9e17fefb439ca8ab3682';

      try {
        const res = await fetch(url);
        const data = await res.json();
        const limited = (isHome ? data.results.slice(0, 8) : data.results);
        setMovieList(limited);
      } catch (error) {
        console.log('Error fetching data', error)
      }
    };
    fetchMovies();
  }, [isHome]);

  return (
    <section className="">
      <div className="container mx-auto">
        {/* <input type="text" placeholder="Search" id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent text-blue-600 border border-blue-600 px-6 p-2 rounded-full text-sm md:text-base lg:w-80" /> */}
        <>
          <h2>LATEST MOVIES</h2>
          <div className="grid grid-cols-4 gap-3">
            {movieList.map((movie) => (
              <Listing key={movie.id} list={movie} />
            ))}
          </div>
        </>
      </div>
    </section>
  )
};

Movies.propTypes = {
  isHome: PropTypes.bool
};

export default Movies
