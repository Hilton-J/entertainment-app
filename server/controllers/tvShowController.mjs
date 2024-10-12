import { TVShowRepository } from "../repositories/tvShowRepository.mjs";

export class TVShowController {
  constructor() {
    this.repository = new TVShowRepository();
  }

  async tvShowGenres(req, res) {
    try {
      const tv = await this.repository.tvShowGenres();
      res.json(tv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Genre' });
    }
  }

  async dicoverTVShow(req, res) {
    const { page } = req.params;
    try {
      const tv = await this.repository.dicoverTVShow(page);
      res.json(tv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async dicoverTVShowWithGenres(req, res) {
    const { page, genres } = req.params;

    try {
      const tv = await this.repository.dicoverTVShowWithGenres(page, genres);
      res.json(tv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Tndw' });
    }
  }

  async fetchTVShowByID(req, res) {
    const { id } = req.params;

    try {
      const tv = await this.repository.fetchTVShowByID(id);
      res.json(tv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async fetchTVShowCast(req, res) {
    const { id } = req.params;

    try {
      const cast = await this.repository.fetchTVShowCast(id);
      res.json(cast);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }
}