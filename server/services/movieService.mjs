import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

const baseUrl = process.env.TMDB_BASE_URL;
const api_key = process.env.TMDB_API_KEY;

export class MovieService {
  async movieGenres() {
    try {
      const { data } = await axios.get(`${baseUrl}/genre/movie/list?api_key=${api_key}`);
      return data;
    } catch (error) {
      console.error('Error fetching movie genres data from TMDB:', error);
      throw error;
    }
  }

  async discoverMovies(page) {
    try { 
      const params = {
        api_key,
        page,
        include_adul: false,
      };

      const { data } = await axios.get(`${baseUrl}/discover/movie`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching Movie data W/O Params from TMDB:', error);
      throw error;
    }
  }

  async discoverMoviesWithGenres(page, with_genres) {
    try {
      let params = {
        api_key,
        page,
        include_adult: false,
        with_genres
      };

      const { data } = await axios.get(`${baseUrl}/discover/movie`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching movie data with PARAMS from TMDB:', error);
      throw error;
    }
  }

  async fetchMovieByID(id) {
    try {
      const { data } = await axios.get(`${baseUrl}/movie/${id}?api_key=${api_key}&language=en-US`);
      return data;
    } catch (error) {
      console.error('Error fetching movie data by ID from TMDB:', error);
      throw error;
    }
  }

  async fetchMovieCast(id) {
    try {
      const { data } = await axios.get(`${baseUrl}/movie/${id}/credits?api_key=${api_key}`);
      return data;
    } catch (error) {
      console.error('Error fetching movie cast from TMDB:', error);
      throw error;
    }
  }
}
