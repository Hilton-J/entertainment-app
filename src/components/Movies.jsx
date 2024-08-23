import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import Listing from './Listing'
import ReactPaginate from 'react-paginate';
import Spinner from './Spinner';

const Movies = ({ isHome = false }) => {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 11;

  useEffect(() => {
    const fetchAllMovies = async () => {
      let allMovies = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=5db68074253f9e17fefb439ca8ab3682&page=${page}`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          allMovies = [...allMovies, ...data.results];
          totalPages = 100;
          page++;
        } catch (error) {
          console.log('Error fetching data', error);
          break;
        }
      };

      const limited = isHome ? allMovies.slice(0, 6) : allMovies;
      setMovieList(limited);
      setLoading(false);
    };

    fetchAllMovies();
  }, [isHome]);

  // Filter TV Shows based on search query
  const filteredMovies = movieList.filter((movie) => {
    const title = (movie.title || movie.name || '').toLowerCase();
    const search = (searchQuery || '').toLowerCase();
    return search === '' ? movie : title.includes(search);
  });

  // Pagination logic
  const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);
  const currentMovies = filteredMovies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <input type="text" placeholder="Search" id="searchMov" className="bg-transparent text-black border border-blue-600 px-6 py-2 rounded-full text-sm md:text-base lg:w-80"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h2 className="text-4xl font-bold mb-5 text-center">LATEST MOVIES</h2>
          {loading ? (<Spinner />) : (<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
            {currentMovies.map((movie) => (
              <Listing key={movie.id} list={movie} />
            ))}
          </div>)}
          {!isHome && (
            <div>
              <ReactPaginate
                previousLabel='<'
                nextLabel='>'
                breakLabel='...'
                renderOnZeroPageCount={null}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName="flex justify-center mt-6 space-x-2"
                activeClassName="bg-blue-500 text-white px-3 py-1 rounded"
                disabledClassName="text-gray-400"
                pageClassName="px-3 py-1 rounded border border-gray-300 cursor-pointer hover:bg-gray-200"
                previousClassName="px-3 py-1 rounded border border-gray-300 cursor-pointer hover:bg-gray-200"
                nextClassName="px-3 py-1 rounded border border-gray-300 cursor-pointer hover:bg-gray-200"
                breakClassName="px-3 py-1 rounded border border-gray-300 cursor-pointer hover:bg-gray-200"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
};

Movies.propTypes = {
  isHome: PropTypes.bool
};

export default Movies

