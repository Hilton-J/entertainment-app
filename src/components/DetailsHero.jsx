import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import country from '../data/country.json'
import logo from '../assets/tmdb.svg'

const DetailsHero = ({ item, genres }) => {

  const { type } = useParams();
  const [releaseDate, setReleaseDate] = useState('')
  // const [genres, setGenres] = useState([])

  useEffect(() => {
    if (item) {
      setReleaseDate(item.release_date || item.first_air_date);
      // setGenres(item.genres.map((g) => g.name).join(', '));

    }
  }, [item])

  const releaseYear = releaseDate ? releaseDate.split('-')[0] : 'N/A';

  return (
    <div className='backdrop-blur-md bg-black/30'>
      <div className="container mx-auto top-0 flex h-full w-full flex-wrap py-10">
        <div className="flex items-center sm:items-start gap-5 flex-col sm:flex-row md:gap-10 w-full ">
          <div className="w-fit">
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                  : 'https://www.movienewz.com/img/films/poster-holder.jpg'
              }
              alt={item.title || item.name}
              className="h-full rounded-lg object-fit"
            />
          </div>

          <div className="flex w-full max-w-3xl flex-col gap-4">
            <div className='space-y-5'>
              <h1 className="text-3xl font-bold md:text-4xl">
                <a href={item.homepage} target='_blank'>{item.name || item.original_title}</a>
              </h1>

              <div className='flex flex-col gap-2'>
                <div>{releaseYear}{item.episode_run_time && <span>{item.episode_run_time}m</span>}</div>
                <div>{genres}</div>
                <div className='flex gap-3'>
                  <img src={logo} alt='TMDB Logo' className='w-12 h-6' />{parseFloat(item.vote_average).toFixed(1)}
                </div>
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
  )
};

DetailsHero.propTypes = {
  item: PropTypes.object,
  genres: PropTypes.string
}

export default DetailsHero