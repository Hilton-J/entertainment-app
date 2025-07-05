import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Genres = ({ setSelectedGenres, type }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data: genres } = await axios.get(`/api/${type}/genre`);
        setGenres(genres.genres)
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      }
    }
    fetchGenres();
  }, []);


  const handleGenreSelection = (e) => {
    const genreId = parseInt(e.target.value);

    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((item) => item !== genreId)
        : [...prev, genreId]
    );
  }

  return (
    <div className='space-y-2'>
      <h1 className='text-lg'>Genre</h1>
      <div className='border border-blue-600 p-3 rounded-lg'>
        {genres.map((genre) =>
          <label key={genre.id} className='inline-flex items-center gap-2 mr-4 cursor-pointer'>
            <input name='genre' type='checkbox' value={genre.id} className='accent-blue-600 focus:ring-0 focus:ring-offset-0 rounded cursor-pointer' onChange={handleGenreSelection} />
            {genre.name}
          </label>
        )}
      </div>
    </div>
  )
}

Genres.propTypes = {
  type: PropTypes.string.isRequired,
  setSelectedGenres: PropTypes.func.isRequired
}

export default Genres