import { SearchService } from "../services/searchService.mjs";

export class SearchRepository {
  constructor() {
    this.service = new SearchService();
  }

  async SearchMovie(query, page, releaseYear) {
    return this.service.SearchMovie(query, page, releaseYear);
  }

  async SearchTVShow(query, page, releaseYear) {
    return this.service.SearchTVShow(query, page, releaseYear);
  }
}