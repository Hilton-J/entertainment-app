import { TrendingRepository } from "../repositories/trendingRepository.mjs";

export class TrendingController {
  constructor() {
    this.repository = new TrendingRepository();
  }

  async getTrendingMovies(req, res) {
    try {
      const trending = await this.repository.getTrending();
      res.status(200).json(trending);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending movies' });
    }
  }
}