import axios from 'axios'

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

  async discoverMovies(page, sort, with_genres, releaseYear) {
    try {
      const params = {
        api_key,
        page,
        include_adult: false,
        sort_by: sort,
        with_genres,
        primary_release_year: releaseYear
      };

      const { data } = await axios.get(`${baseUrl}/discover/movie`, { params });
      return data;
    } catch (error) {
      console.error('Error fetching Movie data W/O Params from TMDB:', error);
      throw error;
    }
  }

  async fetchMovieByID(id) {
    try {
      const { data } = await axios.get(`${baseUrl}/movie/${id}?api_key=${api_key}&language=en-US`);
      return data;
    } catch (error) {
      console.error('Error fetching movie data by ID from TMDB:', error);
      throw error;
    }
  }

  async fetchMovieCast(id) {
    try {
      const { data } = await axios.get(`${baseUrl}/movie/${id}/credits?api_key=${api_key}`);
      return data;
    } catch (error) {
      console.error('Error fetching movie cast from TMDB:', error);
      throw error;
    }
  }
}
