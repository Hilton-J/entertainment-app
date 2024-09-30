import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import country from '../data/country.json'
import logo from '../assets/tmdb.svg'
import SeasonsListing from '../components/SeasonsListing'

const ViewPage = () => {
  const { type, id } = useParams()
  const [item, setItem] = useState([])
  const [genres, setGenres] = useState([])
  const [releaseDate, setReleaseDate] = useState('')
  const [seasons, setSeasons] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
      const apiKey = import.meta.env.VITE_API_KEY
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`,
      )
      setSeasons(data.seasons)
      setReleaseDate(data.release_date || data.first_air_date)
      setGenres(data.genres.map((g) => g.name).join(', '));
      setItem(data)
    }

    fetchItem();
  }, [type, id])

  const backgroundImageUrl = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
    : 'https://www.movienewz.com/img/films/poster-holder.jpg';


  const releaseYear = releaseDate.split('-')[0];

  return (
    <section className="min-h-screen bg-blue-50 text-white space-y-5">
      <div
        className='relative mx-auto h-fit bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        {/* <img
          src={item.backdrop_path ?
            `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
            :
            'https://www.movienewz.com/img/films/poster-holder.jpg'}
          alt={item.title || item.name}
          className=' object-cover rounded-lg w-full h-full' /> */}
        <div className='size-full backdrop-blur-md bg-black/30'>
          <div className="container mx-auto top-0 flex h-full w-full flex-wrap py-10">
            <div className="flex items-center sm:items-start gap-10 flex-col sm:flex-row md:gap-20 w-full ">
              <div className="w-72 ">
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

              <div className="flex w-full max-w-3xl flex-col gap-4">
                <div className='space-y-5'>
                  <h1 className="text-3xl font-bold md:text-4xl">
                    <a href={item.homepage} target='_blank'>{item.name || item.original_title}&nbsp;({releaseYear})</a>
                  </h1>

                  <div className='flex gap-2'>
                    <img src={logo} alt='TMDB Logo' className='w-12 h-6' />
                    <span>{parseFloat(item.vote_average).toFixed(1)}</span>
                    <span>&middot;</span>
                    {type === 'tv' ? <span>{item.number_of_seasons} seasons</span> : <span>{item.runtime} min</span>}
                    <span>&middot;</span>
                    <span>{genres}</span>
                  </div>
                </div>

                <p className="text-justify text-xs">{item.overview}</p>
                <div className="text-xs">
                  <p>
                    <strong>Country:</strong> {country.find(({ code }) => item.origin_country == code)?.name || 'N/A'}
                  </p>
                  <p>
                    <strong>Type:</strong> {type === 'tv' ? 'TV Show' : 'Movie'}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-black container mx-auto'>
        <h3 className='text-2xl'>{item.number_of_seasons}
          {item.number_of_seasons > 1 ? ' Seasons' : ' Season'}</h3>
        <div className='flex gap-10'>
          {seasons.map((season) => (
            <SeasonsListing key={season.id} list={season} />
          ))}
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
