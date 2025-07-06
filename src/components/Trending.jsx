import axios from 'axios';
import Spinner from './Spinner';
import Listing from './Listing';
import Paginate from './Paginate';
import React, { useState, useEffect } from 'react';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(`${import.meta.env.EXPRESS_API_URL}/trending`)
      data.total_pages < 50 ? setPageCount(data.total_pages) : setPageCount(50)
      setTrending(data.results)

      setLoading(false)
    }
    fetchTrending()
  }, [currentPage])


  return (
    <section className="px-4 py-10">
      <div className="m-auto flex w-[90%] flex-col min-h-screen gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600">TRENDING</h2>
        <div className={`grid ${!loading && "grid-cols-2 md:grid-cols-5"}  gap-3 mx-auto flex-1`}>
          {loading ? (
            <Spinner className='mx-auto' />
          ) : (
            trending.map((show) => (
              <Listing key={show.id} list={show} type={show.media_type} />
            ))
          )}
        </div>

        {pageCount > 2 && <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />}
      </div>
    </section>
  )
}

export default Trending
