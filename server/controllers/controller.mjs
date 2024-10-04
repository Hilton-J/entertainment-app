import { Repository } from "../repositories/repository.mjs";

export class Controller {
  constructor() {
    this.Repository = new Repository();
  }

  async getTrending(req, res) {
    try {
      const trending = await this.Repository.getTrending();
      res.json(trending);
      console.log(res.json(trending))
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending movies' });
    }
  }

  // ... other controller methods
}