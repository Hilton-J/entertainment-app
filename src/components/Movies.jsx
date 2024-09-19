// import PropTypes from 'prop-types'
import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import Listing from './Listing'
import Spinner from './Spinner';
import FilterProvider from './FilterProvider';
import Paginate from './Paginate';
import { GenreContext } from '../contexts/GenreContext';


const Movies = () => {

  const { selectedGenres } = useContext(GenreContext);

  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  // const genreURL = useGenres(selectedGenres);


  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${currentPage}&with_genres=${selectedGenres}`);
      data.total_pages > 50 ? setPageCount(50) : setPageCount(data.total_pages);
      setMovieList(data.results);
      console.log(pageCount);
      console.log(data);
      setLoading(false);

    };
    fetchMovies();
  }, [currentPage, selectedGenres, pageCount]);

  return (
    <section className="px-4 py-10">
      <div className=" m-auto flex flex-col justify-center w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center">LATEST MOVIES</h2>

        {loading ? (<Spinner />) : (
          <FilterProvider type={'movies'}>
            {movieList.map((movie) => (
              <Listing key={movie.id} list={movie} type={'movie'} />
            ))}
          </FilterProvider>)}

        <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
      </div>
    </section>
  )
};

export default Movies

