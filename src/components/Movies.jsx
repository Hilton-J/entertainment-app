// import PropTypes from 'prop-types'
import axios from 'axios'
import { useState, useEffect } from "react"
import Listing from './Listing'
import Spinner from './Spinner';
import CustomPagination from './CustomPagination';
import Genres from './Genres';
import useGenres from '../Hooks/useGenres';
import FilterProvider from './FilterProvider';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreURL = useGenres(selectedGenres);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}&with_genres=${genreURL}`);
      setMovieList(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [currentPage, genreURL]);

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='lg:w-[70%]'>
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center">LATEST MOVIES</h2>
          <FilterProvider />
          <Genres
            type='movie'
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setCurrentPage={setCurrentPage}
          />
          {loading ? (<Spinner />) : (<div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
            {movieList.map((movie) => (
              <Listing key={movie.id} list={movie} type={'Movie'} />
            ))}
          </div>)}
          <CustomPagination setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </section>
  )
};

export default Movies

