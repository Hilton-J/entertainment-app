import { MovieService } from "../services/movieService.mjs";

export class MovieRepository {
  constructor() {
    this.service = new MovieService();
  }

  async movieGenres() {
    return this.service.movieGenres();
  }

  async discoverMovies(page) {
    return this.service.discoverMovies(page);
  }

  async discoverMoviesWithGenres(page, with_genres) {
    return this.service.discoverMoviesWithGenres(page, with_genres);
  }

  async fetchMovieByID(id) {
    return this.service.fetchMovieByID(id);
  }

  async fetchMovieCast(id) {
    return this.service.fetchMovieCast(id);
  }
}