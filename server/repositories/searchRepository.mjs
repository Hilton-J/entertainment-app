import { SearchService } from "../services/searchService.mjs";

export class SearchRepository {
  constructor() {
    this.service = new SearchService();
  }

  async SearchMovie(query, page) {
    return this.service.SearchMovie(query, page);
  }

  async SearchTVShow(query, page) {
    return this.service.SearchTVShow(query, page);
  }
}