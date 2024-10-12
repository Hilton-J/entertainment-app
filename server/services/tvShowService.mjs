import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.TMDB_BASE_URL;
const api_key = process.env.TMDB_API_KEY;

export class TVShowService {
  async tvShowGenres() {
    try {
      const { data } = await axios.get(`${baseUrl}/genre/tv/list?api_key=${api_key}`);
      return data;
    } catch (error) {
      console.error('Error fetching Tv-Show genres data from TMDB:', error);
      throw error;
    }
  }

  async dicoverTVShow(page) {
    try {
      let params = {
        api_key,
        page,
        include_adult: false
      };

      const { data } = await axios.get(`${baseUrl}/discover/tv`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching Tv-Show data W/O PARAMS from TMDB:', error);
      throw error;
    }
  }

  async dicoverTVShowWithGenres(page, with_genres) {
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
      console.error('Error fetching Tv-Show data WITH PARAMS from TMDB:', error);
      throw error;
    }
  }

  async fetchTVShowByID(id) {
    try {
      const { data } = await axios.get(`${baseUrl}/tv/${id}?api_key=${api_key}&language=en-US`);
      return data;
    } catch (error) {
      console.error('Error fetching TVSHow data by ID from TMDB:', error);
      throw error;
    }
  }

  async fetchTVShowCast(id) {
    try {
      const { data } = await axios.get(`${baseUrl}/tv/${id}/credits?api_key=${api_key}`);
      return data;
    } catch (error) {
      console.error('Error fetching movie cast from TMDB:', error);
      throw error;
    }
  }
}
