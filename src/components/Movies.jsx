// import PropTypes from 'prop-types'
import axios from 'axios'
import { useState, useEffect } from "react"
import Listing from './Listing'
import Spinner from './Spinner';
import CustomPagination from './CustomPagination';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`);
      console.log(data);
      setMovieList(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [currentPage]);

  // useEffect(() => {
  //   const fetchAllMovies = async () => {
  //     let allMovies = [];
  //     let page = 1;
  //     let totalPages = 1;

  //     while (page <= totalPages) {
  //       const apiKey = import.meta.env.VITE_API_KEY;
  //       const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;

  //       try {
  //         const res = await fetch(url);
  //         const data = await res.json();

  //         allMovies = [...allMovies, ...data.results];
  //         totalPages = 100;
  //         page++;
  //       } catch (error) {
  //         console.log('Error fetching data', error);
  //         break;
  //       }
  //     };

  //     const limited = isHome ? allMovies.slice(0, 6) : allMovies;
  //     setMovieList(limited);
  //     setLoading(false);
  //   };

  //   fetchAllMovies();
  // }, [isHome]);

  // // Filter TV Shows based on search query
  // const filteredMovies = movieList.filter((movie) => {
  //   const title = (movie.title || movie.name || '').toLowerCase();
  //   const search = (searchQuery || '').toLowerCase();
  //   return search === '' ? movie : title.includes(search);
  // });

  // // Pagination logic
  // const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);
  // const currentMovies = filteredMovies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // const handlePageClick = (e) => {
  //   setCurrentPage(e.selected);
  // };

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <h2 className="text-4xl font-bold mb-5 text-center">LATEST MOVIES</h2>
          {loading ? (<Spinner />) : (<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
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

