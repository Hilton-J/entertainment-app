import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

// const baseUrl = process.env.TMDB_BASE_URL;
const apiKey = process.env.TMDB_API_KEY;

export class MovieService {
  async discoverMovies(pageNum, genres) {
    try {
      const params = {
        api_key: apiKey,
        page: pageNum,
        with_genres: genres,
        include_adult: false,
      };

      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie`, { params });
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching trending data from TMDB:', error);
      throw error;
    }
  }
}
