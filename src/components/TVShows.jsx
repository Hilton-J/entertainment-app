import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Listing from './Listing';
import ReactPaginate from 'react-paginate';
import Spinner from './Spinner';

const TVShows = ({ isHome = false }) => {
  const [tvShowList, setTVShowList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 18;

  useEffect(() => {
    const fetchAllTVShows = async () => {
      let allShows = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=5db68074253f9e17fefb439ca8ab3682&page=${page}`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          allShows = [...allShows, ...data.results];
          totalPages = 200;
          page++;
        } catch (error) {
          console.log('Error fetching data', error);
          break;
        }
      };

      const limited = isHome ? allShows.slice(0, 6) : allShows;
      setTVShowList(limited);
      setLoading(false);
    };

    fetchAllTVShows();
  }, [isHome]);

  // Filter TV shows based on search query
  const filteredShows = tvShowList.filter((show) => {
    const title = (show.title || show.name || '').toLowerCase();
    const search = (searchQuery || '').toLowerCase();
    return search === '' ? show : title.includes(search);
  });

  // Pagination logic
  const pageCount = Math.ceil(filteredShows.length / itemsPerPage);
  const currentShows = filteredShows.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="bg-transparent text-black border border-blue-600 px-6 py-2 rounded-full text-sm md:text-base lg:w-80"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h2 className="text-4xl font-bold mb-5 text-center">LATEST TV SHOWS</h2>
          {loading ? (<Spinner />) : (<div className="grid md:grid-cols-3 gap-3 justify-center">
            {currentShows.map((tvShow) => (
              <Listing key={tvShow.id} list={tvShow} />
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

TVShows.propTypes = {
  isHome: PropTypes.bool
};

export default TVShows;
