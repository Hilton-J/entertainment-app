import { MovieService } from "../services/movieService.mjs";

export class MovieRepository {
  constructor() {
    this.service = new MovieService();
  }

  async movieGenres() {
    return this.service.movieGenres();
  }

  async discoverMovies(page, sort, with_genres, releaseYear, country, language, fromDate, toDate) {
    return this.service.discoverMovies(page, sort, with_genres, releaseYear, country, language, fromDate, toDate);
  }

  async fetchMovieByID(id) {
    return this.service.fetchMovieByID(id);
  }

  async fetchMovieCast(id) {
    return this.service.fetchMovieCast(id);
  }
}