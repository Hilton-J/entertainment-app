import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import country from '../data/country.json'
import logo from '../assets/tmdb.svg'

const ViewPage = () => {
  const { type, id } = useParams()
  const [item, setItem] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
      const apiKey = import.meta.env.VITE_API_KEY
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`,
      )

      setGenres(data.genres.map((g) => g.name).join(', '));
      setItem(data)
    }

    fetchItem()
  }, [type, id])


  const backgroundImageUrl = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
    : 'https://www.movienewz.com/img/films/poster-holder.jpg';

  return (
    <section className="min-h-screen bg-blue-50 text-white">
      <div
        className="relative mx-auto h-fit bg-black/30"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <img
          src={item.backdrop_path ?
            `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
            :
            'https://www.movienewz.com/img/films/poster-holder.jpg'}
          alt={item.title || item.name}
          className=' object-cover rounded-lg w-full h-full' /> */}

        <div className="container mx-auto top-0 flex h-full w-full flex-wrap px-4 py-10">
          <div className="flex items-center sm:items-start gap-10 flex-col sm:flex-row md:gap-20">
            <div className="w-72">
              <div className=''>
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                      : 'https://www.movienewz.com/img/films/poster-holder.jpg'
                  }
                  alt={item.title || item.name}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
            </div>

            <div className="flex w-full max-w-lg flex-col gap-4">
              <div className='space-y-5'>
                <h1 className="text-3xl font-bold md:text-4xl">
                  <a href={item.homepage} target='_blank'>{item.name || item.original_title}&nbsp;()</a>
                </h1>

                <div className='flex gap-2'>
                  <img src={logo} alt='TMDB Logo' className='w-12 h-6' />
                  {parseFloat(item.vote_average).toFixed(1)}
                  <span>&middot;</span>
                  {type === 'tv' ? <span>{item.number_of_seasons} seasons</span> : <span>{item.runtime} min</span>}
                  <span>&middot;</span>
                  {genres}
                </div>
              </div>

              <p className="text-justify text-xs">{item.overview}</p>
              <div className="text-xs">
                <p>
                  <strong>Country</strong>: {country.find(({ code }) => item.origin_country == code)?.name || 'N/A'}
                </p>
                <p>
                  <strong>Type</strong>: {type === 'tv' ? 'TV Show' : 'Movie'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
}

export default ViewPage
