import { MovieRepository } from "../repositories/movieRepository.mjs";

export class MovieController {
  constructor() {
    this.repository = new MovieRepository();
  }

  async discoverMovies(req, res) {
    const { page, genres } = req.params;
    
    try {
      const movies = await this.repository.discoverMovies(page, genres);
      res.json(movies);
      // res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }
}