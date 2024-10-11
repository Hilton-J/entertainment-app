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
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async discoverMovies1(req, res) {
    const { page } = req.params;

    try {
      const movies = await this.repository.discoverMovies(page);
      res.json(movies);
      // res.status(200).json(movies); //with status(200), you're explicitly setting the OK responce code to 200
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async movieGenres(req, res) {
    try {
      const genres = await this.repository.movieGenres();
      console.log(req);
      res.json(genres);
      // res.status(200).json(movies); //with status(200), you're explicitly setting the OK responce code to 200
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }
}