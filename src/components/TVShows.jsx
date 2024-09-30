// import PropTypes from 'prop-types';
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Listing from './Listing'
import Spinner from './Spinner'
import Genres from './Genres'
import useGenres from '../Hooks/useGenres'
import Paginate from './Paginate'
import FilterProvider from './FilterProvider'
import { GenreContext } from '../contexts/GenreContext'

const TVShows = () => {
  const { selectedGenres } = useContext(GenreContext)
  const [tvShowList, setTVShowList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [pageCount, setPageCount] = useState(50)
  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const [genres, setGenres] = useState([])
  // const genreURL = useGenres(selectedGenres)
  // console.log(genreURL)

  useEffect(() => {
    const fetchTVShows = async () => {
      const apiKey = import.meta.env.VITE_API_KEY
      const apiURL = !searchQuery
        ? `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&include_adult=false&page=${currentPage}&with_genres=${selectedGenres}`
        : `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`

      const { data } = await axios.get(apiURL)
      data.total_pages < 50 && setPageCount(data.total_pages)
      setTVShowList(data.results)
      setLoading(false)
    }
    fetchTVShows()
  }, [currentPage, selectedGenres, searchQuery])


  return (
    <section className="px-4 py-10">
      <div className="m-auto flex w-full flex-col justify-center min-h-screen">
        <h2 className="mb-5 text-center text-2xl font-bold md:text-4xl">
          LATEST TV SHOWS
        </h2>
        {/* <Genres
            type='tv'
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setCurrentPage={setCurrentPage}
          /> */}

        {loading ? (
          <Spinner />
        ) : (
          <FilterProvider type={'tv'} setSearchQuery={setSearchQuery}>
            {tvShowList.map((tvShow) => (
              <Listing key={tvShow.id} list={tvShow} type={'tv'} />
            ))}
          </FilterProvider>
        )}
        <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
      </div>
    </section>
  )
}

export default TVShows
