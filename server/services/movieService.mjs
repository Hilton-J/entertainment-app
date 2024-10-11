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

  async discoverMovies1(page) {
    try {
      const params = {
        api_key,
        page,
        include_adul: false,
      };

      const { data } = await axios.get(`${baseUrl}/discover/movie`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching trending data from TMDB:', error);
      throw error;
    }
  }

  async discoverMovies(page, with_genres) {
    // Default to page 1

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
      console.error('Error fetching trending data from TMDB:', error);
      throw error;
    }
  }
}
