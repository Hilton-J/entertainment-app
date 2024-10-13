import { useParams } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import country from '../data/country.json'
import logo from '../assets/tmdb.svg'
import SeasonsListing from '../components/SeasonsListing'
import Cast from '../components/Cast'
// import DetailsHero from '../components/DetailsHero'

const ViewPage = () => {
  const { type, id } = useParams()
  const [item, setItem] = useState([])
  const [genres, setGenres] = useState([])
  const [releaseYear, setReleaseYear] = useState('')
  const [seasons, setSeasons] = useState([])
  const [listCast, setListCast] = useState([])


  useEffect(() => {
    const fetchItem = async () => {
      const url = type === 'tv' ? `/api/tvshow/tv-id/${id}` : `/api/movie/movie-id/${id}`;
      const { data } = await axios.get(url);
      const releaseDate = data.release_date || data.first_air_date;

      setSeasons(data.seasons);
      setReleaseYear(releaseDate.split('-')[0]);
      setGenres(() => data.genres.map((g) => g.name).join(', '));
      setItem(data);

    }

    const fetchCrew = async () => {
      const url = type === 'tv' ? `/api/tvshow/credits/${id}` : `/api/movie/credits/${id}`;
      const { data } = await axios.get(url);

      setListCast(data.cast);

    }

    fetchItem();
    fetchCrew();

  }, [type, id])

  const backgroundImageUrl = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
    : 'https://www.movienewz.com/img/films/poster-holder.jpg';

  return (
    <section className="min-h-screen bg-blue-50 text-white flex flex-col gap-12">
      <div className='relative mx-auto h-fit bg-cover bg-center bg-no-repeat w-full'
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
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
                  className="h-full w-full rounded-lg object-fit"
                />
              </div>

              <div className="flex w-full max-w-3xl flex-col gap-4">
                <div className='space-y-5'>
                  <h1 className="text-3xl font-bold md:text-4xl">
                    <a href={item.homepage} target='_blank' rel="noreferrer">{item.name || item.original_title}</a>
                  </h1>

                  <div className='flex flex-col gap-2'>

                    <div className='flex gap-3'>
                      {releaseYear}
                      {item.episode_run_time && item.episode_run_time.length > 0 && (
                        <span>{item.episode_run_time}m</span>
                      )}
                    </div>
                    <div>{genres}</div>
                    <div className='flex gap-3'>
                      <img src={logo} alt='TMDB Logo' className='w-12 h-6' />{parseFloat(item.vote_average).toFixed(1)}
                    </div>
                  </div>
                </div>

                <p className="text-justify">{item.overview}</p>
                <div className="">
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

      {seasons !== undefined && <SeasonsListing numSeason={item.number_of_seasons} list={seasons} />}
      {listCast.length > 0 && <Cast list={listCast} title={item.name || item.original_title} />}
    </section>
  )
};

ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default ViewPage