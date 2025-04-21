import axios from 'axios';

const baseUrl = process.env.TMDB_BASE_URL;
const api_key = process.env.TMDB_API_KEY;

export class ConfigurationService {
  async getLanguages() {
    try {
      const data = await axios.get(`${baseUrl}/configuration/languages?api_key=${api_key}`);
      return data;
    } catch (error) {
      console.error('Error fetching languages', error);
      throw error;
    }
  }

  async getCountries() {
    try {
      const data = await axios.get(`${baseUrl}/configuration/countries?api_key=${api_key}&language=en-US`);
      return data;
    } catch (error) {
      console.error('Error fetching languages', error);
      throw error;
    }
  }
}