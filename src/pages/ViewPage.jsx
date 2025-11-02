import axios from 'axios';
import PropTypes from 'prop-types';
import logo from '../assets/tmdb.svg';
import Cast from '../components/Cast';
import country from '../data/country.json';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SeasonsListing from '../components/SeasonsListing';

// Helper function to safely construct image URLs
const getImageUrl = (path, size = 'w300') =>
  path
    ? `https://image.tmdb.org/t/p/${size}${path}`
    : 'https://www.movienewz.com/img/films/poster-holder.jpg';

const ViewPage = () => {
  const { type, id } = useParams();

  // Initialize state with appropriate types for safety
  const [item, setItem] = useState({});
  // Initialize arrays with [] to prevent 'map' on undefined error
  const [genres, setGenres] = useState([]);
  const [releaseYear, setReleaseYear] = useState('N/A');
  const [seasons, setSeasons] = useState([]);
  const [listCast, setListCast] = useState([]);

  // New state for robustness
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchItemAndCrew = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1. Fetch Item Data
        const itemUrl = type === 'tv' ? `/api/tvshows/tv-id/${id}` : `/api/movies/movie-id/${id}`;
        const itemResponse = await axios.get(itemUrl);
        const data = itemResponse.data;

        const releaseDate = data?.release_date || data?.first_air_date;

        setSeasons(data?.seasons || []); // Fallback to []

        // FIX: Safely check releaseDate before calling .split()
        if (releaseDate) {
          setReleaseYear(releaseDate.split('-')[0]);
        } else {
          setReleaseYear('N/A');
        }

        // Setting genres as a list of strings to be joined later
        setGenres(data?.genres?.map((g) => g.name) || []);
        setItem(data);

        // 2. Fetch Crew Data
        const crewUrl = type === 'tv' ? `/api/tvshows/credits/${id}` : `/api/movies/credits/${id}`;
        const crewResponse = await axios.get(crewUrl);
        setListCast(crewResponse.data.cast || []); // Fallback to []

      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to load details. Please check the network connection.');
      } finally {
        setLoading(false);
      }
    }

    fetchItemAndCrew();

  }, [type, id]);

  const backgroundImageUrl = getImageUrl(item.backdrop_path);
  const genresString = genres.join(', '); // Join genres only when rendering

  // --- LOADING AND ERROR STATES ---
  if (loading) {
    return (
      <section className="min-h-screen bg-blue-50 text-white flex justify-center items-center">
        <h1 className="text-3xl font-bold">Loading Details...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-blue-50 text-red-500 flex justify-center items-center">
        <h1 className="text-3xl font-bold">{error}</h1>
      </section>
    );
  }
  // --- END LOADING AND ERROR STATES ---

  return (
    <section className="min-h-screen bg-blue-50 text-white flex flex-col gap-12">
      <div className='relative mx-auto h-fit bg-cover bg-center bg-no-repeat w-full'
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className='backdrop-blur-md bg-black/30'>
          <div className="mx-auto top-0 flex h-full w-[90%] flex-wrap py-10">
            <div className="flex items-center sm:items-start gap-5 flex-col sm:flex-row md:gap-10 w-full px-4">
              <div className="w-fit">
                <img
                  src={getImageUrl(item.poster_path)}
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
                      {/* Robust Runtime Display */}
                      {type === 'movie' && item.runtime && <span>{item.runtime}m</span>}
                      {type === 'tv' && item.episode_run_time?.[0] && (
                        <span>{item.episode_run_time[0]}m</span>
                      )}
                    </div>
                    <div>{genresString}</div> {/* Use the joined string */}
                    <div className='flex gap-3'>
                      <img src={logo} alt='TMDB Logo' className='w-12 h-6' />
                      {/* Robust Vote Average Display */}
                      {item.vote_average > 0 ? parseFloat(item.vote_average).toFixed(1) : 'N/A'}
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

      <div className='px-4 w-[90%] mx-auto space-y-10 mb-12'>
        {/* Pass empty array if seasons is null/undefined to SeasonsListing for safety */}
        {seasons?.length > 0 && <SeasonsListing numSeason={item.number_of_seasons} list={seasons} />}
        {/* Pass empty array if listCast is null/undefined to Cast for safety */}
        {listCast?.length > 0 && <Cast list={listCast} title={item.name || item.original_title} />}
      </div>
    </section>
  )
};

ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default ViewPage;