import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.TMDB_BASE_URL;
const api_key = process.env.TMDB_API_KEY;

export class SearchService {
  async SearchMovie(query, page) {
    try {
      const params = {
        api_key,
        language: 'en-US',
        query,
        page,
        include_adult: false,
      }
      const { data } = await axios.get(`${baseUrl}/search/movie`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching Movie data: ', error);
    }
  }

  async SearchTVShow(query, page) {
    try {
      const params = {
        api_key,
        language: 'en-US',
        query,
        page,
        include_adult: false,
      }
      const { data } = await axios.get(`${baseUrl}/search/tv`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching TV-Shows data: ', error);
    }
  }
}