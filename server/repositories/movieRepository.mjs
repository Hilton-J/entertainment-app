import { MovieService } from "../services/movieService.mjs";

export class MovieRepository {
  constructor() {
    this.service = new MovieService();
  }

  async discoverMovies(page, with_genres) {
    return this.service.discoverMovies(page, with_genres);
  }
}