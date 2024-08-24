import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from './Spinner';
import ReactPaginate from 'react-paginate';
import Listing from './Listing';

const Trending = () => {

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const fetchTrending = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
    console.log(data);
    setContent(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  const pageCount = Math.ceil(content.length / itemsPerPage);
  const currentMovies = content.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };


  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <h2 className="text-4xl font-bold mb-5 text-center">TRENDING</h2>
          {loading ? (<Spinner />) : (<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
            {currentMovies.map((movie) => (
              <Listing key={movie.id} list={movie} type={movie.media_type} />
            ))}
          </div>)}

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
        </div>
      </div>
    </section>
  )
}

export default Trending