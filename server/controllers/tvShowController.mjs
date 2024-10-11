import { TVShowRepository } from "../repositories/tvShowRepository.mjs";

export class TVShowController {
  contructor() {
    this.repository = new TVShowRepository();
  }

  async dicoverTVShow(req, res) {
    const { page, genres } = req.params;

    try {
      const tv = await this.repository.dicoverTVShow(page, genres);
      res.json(tv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async dicoverTVShow1(req, res) {
    const { page } = req.params;
    try {
      const tv = await this.repository.dicoverTVShow1(page);
      res.json(tv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }
}