import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.TMDB_BASE_URL;
const api_key = process.env.TMDB_API_KEY;

export class TVShowService {
  async dicoverTVShow(page, with_genres) {
    try {
      let params = {
        api_key,
        page,
        include_adult: false,
        with_genres
      };

      const { data } = await axios.get(`${baseUrl}/discover/tv`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching trending data from TMDB:', error);
      throw error;
    }
  }
}
