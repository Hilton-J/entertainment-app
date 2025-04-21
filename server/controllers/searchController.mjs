import { SearchRepository } from "../repositories/searchRepository.mjs";

export class SearchController {
  constructor() {
    this.repository = new SearchRepository();
  }

  async SearchMovie(req, res) {
    const { query, page } = req.params;
    const { releaseYear } = req.query;

    try {
      const tvShow = await this.repository.SearchMovie(query, page, releaseYear);
      res.json(tvShow);
    } catch (error) {
      console.error('Error fetching TV-Show data: ', error);
    }
  }

  async SearchTVShow(req, res) {
    const { query, page } = req.params;
    try {
      const tvShow = await this.repository.SearchTVShow(query, page);
      res.json(tvShow);
    } catch (error) {
      console.error('Error fetching TV-Show data: ', error);
    }
  }
}