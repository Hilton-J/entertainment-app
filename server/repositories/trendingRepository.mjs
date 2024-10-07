import { TrendingService } from "../services/trendingService.mjs";

export class TrendingRepository {
  constructor() {
    this.service = new TrendingService();
  }

  async getTrending() {
    return await this.service.getTrending();
  }

  // ... other methods
}