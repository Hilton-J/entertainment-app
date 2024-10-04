import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = process.env.TMDB_API_KEY;

export class Service {
  async getTrending() {
    const { data } = await axios.get(`${BASE_URL}/trending/all/week?api_key=${apiKey}`);
    return data;
  }
  // ... other methods
}