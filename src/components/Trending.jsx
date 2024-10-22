import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import Listing from './Listing'
import Paginate from './Paginate'

const Trending = () => {
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const fetchTrending = async () => {
      // const apiKey = import.meta.env.VITE_API_KEY
      const { data } = await axios.get('/api/trending')
      data.total_pages < 50 ? setPageCount(data.total_pages) : setPageCount(50)
      setContent(data.results)

      setLoading(false)
    }
    fetchTrending()
    console.log('UseEffect');
  }, [currentPage])
  console.log('Render Before');

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className="lg:w-[70%]">
          <h2 className="mb-5 text-center text-2xl font-bold md:text-4xl">
            TRENDING
          </h2>
          {/* {!loading && content.length > 0 ? (
            <div className="grid justify-center gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {content.map((movie) => (
                <Listing key={movie.id} list={movie} type={movie.media_type} />
              ))}
            </div>
          ) : (
            <p>No trending content available</p>
          )} */}
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid justify-center gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {content.map((movie) => (
                <Listing key={movie.id} list={movie} type={movie.media_type} />
              ))}
            </div>
          )}

          {pageCount > 2 && <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />}
        </div>
      </div>
    </section>
  )
}

export default Trending
