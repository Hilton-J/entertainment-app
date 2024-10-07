//This is where you make your API call that are rela
import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = process.env.TMDB_API_KEY;

export class TrendingService {

  async getTrending() {
    try {
      const { data } = await axios.get(`${BASE_URL}/trending/all/week?api_key=${apiKey}`);
      return data;
    } catch (error) {
      console.error('Error fetching trending data from TMDB:', error);
      throw error;
    }
  }
  // ... other methods
}