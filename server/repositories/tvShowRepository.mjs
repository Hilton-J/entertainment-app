import { TVShowService } from "../services/tvSHowService.mjs";

export class TVShowRepository {
  constructor() {
    this.service = new TVShowService();
  }

  async dicoverTVShow(page, with_genres) {
    return this.service.dicoverTVShow(page, with_genres);
  }

  async dicoverTVShow1(page) {
    return this.service.dicoverTVShow1(page);
  }
}