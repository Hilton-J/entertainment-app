import { TVShowService } from "../services/tvShowService.mjs";

export class TVShowRepository {
  constructor() {
    this.service = new TVShowService();
  }

  async tvShowGenres() {
    return this.service.tvShowGenres();
  }

  async dicoverTVShow(page) {
    return this.service.dicoverTVShow(page);
  }

  async dicoverTVShowWithGenres(page, with_genres) {
    return this.service.dicoverTVShowWithGenres(page, with_genres);
  }

  async fetchTVShowByID(id) {
    return this.service.fetchTVShowByID(id);
  }

  async fetchTVShowCast(id) {
    return this.service.fetchTVShowCast(id);
  }
}