// import PropTypes from 'prop-types'
import axios from 'axios'
import { useState, useEffect } from "react"
import Listing from './Listing'
import Spinner from './Spinner';
// import CustomPagination from './CustomPagination';
// import Genres from './Genres';
// import useGenres from '../Hooks/useGenres';
import FilterProvider from './FilterProvider';
import Paginate from './Paginate';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const [genres, setGenres] = useState([]);
  // const genreURL = useGenres(selectedGenres);
  // const [listLength, setListLength] = useState(0);

  // const itemsPerPage = 20;

  // const pageCount = Math.ceil(listLength / itemsPerPage);
  // console.log(pageCount);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      // const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${currentPage}&with_genres=${genreURL}`);
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${currentPage}`);

      setMovieList(data.results);
      setLoading(false);

    };
    fetchMovies();
  }, [currentPage]);

  return (
    <section className="px-4 py-10">
      <div className=" m-auto flex flex-col justify-center w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center">LATEST MOVIES</h2>

        {loading ? (<Spinner />) : (
          <FilterProvider>
            {movieList.map((movie) => (
              <Listing key={movie.id} list={movie} type={'movie'} />
            ))}
          </FilterProvider>)}

        {/* <Genres
            type='movie'
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setCurrentPage={setCurrentPage}
          /> */}


        <Paginate setCurrentPage={setCurrentPage} />
      </div>
    </section>
  )
};

export default Movies

