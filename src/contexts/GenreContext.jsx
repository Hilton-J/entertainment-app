import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {

  const [tvGenres, setTvGenres] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);


  const apiKey = import.meta.env.VITE_API_KEY;

  // Fetch Genres on Initial Render
  useEffect(() => {
    const fetchMovieGenres = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
      setMovieGenres(data.genres);
    };

    fetchMovieGenres();

  }, [apiKey]);

  useEffect(() => {
    const fetchTvGenres = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`);
      setTvGenres(data.genres);
    };
    fetchTvGenres();
  }, [apiKey]);


  return (
    <GenreContext.Provider
      value={{
        tvGenres,
        movieGenres,
        setSelectedGenres,
        selectedGenres
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};

GenreProvider.propTypes = {
  children: PropTypes.node
};