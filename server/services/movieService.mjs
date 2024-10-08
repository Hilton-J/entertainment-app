import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

const baseUrl = process.env.TMDB_BASE_URL;
const apiKey = process.env.TMDB_API_KEY;

export class MovieService {
  async discoverMovies(pageNum, genres) {
    try {
      const { data } = await axios.get(`${baseUrl}/discover/movie`, {
        params: {
          api_key: apiKey,
          page: pageNum,
          with_genres: genres,
          include_adult: false
        }
      });
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching trending data from TMDB:', error);
      throw error;
    }
  }
}
