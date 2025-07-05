import axios from 'axios';

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

  async dicoverTVShows(page, sort, with_genres, releaseYear, country, language, fromDate, toDate) {
    try {
      let params = {
        api_key,
        page,
        include_adult: false,
        sort_by: sort,
        with_genres,
        with_origin_country: country,
        with_original_language: language,
        first_air_date_year: releaseYear,
        "first_air_date.gte": fromDate,
        "first_air_date.lte": toDate,
      };

      const { data } = await axios.get(`${baseUrl}/discover/tv`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching Tv-Show data W/O PARAMS from TMDB:', error);
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
