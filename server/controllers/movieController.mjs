import { MovieRepository } from "../repositories/movieRepository.mjs";

export class MovieController {
  constructor() {
    this.repository = new MovieRepository();
  }

  async movieGenres(req, res) {
    try {
      const genres = await this.repository.movieGenres();
      res.json(genres);
      // res.status(200).json(movies); //with status(200), you're explicitly setting the OK responce code to 200
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async discoverMovies(req, res) {
    const { page } = req.params;
    const { sort, with_genres, releaseYear } = req.query;

    try {
      const movies = await this.repository.discoverMovies(page, sort, with_genres, releaseYear);
      res.json(movies);
      // res.status(200).json(movies); //with status(200), you're explicitly setting the OK responce code to 200
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async fetchMovieByID(req, res) {
    const { id } = req.params;

    try {
      const movie = await this.repository.fetchMovieByID(id);
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async fetchMovieCast(req, res) {
    const { id } = req.params;

    try {
      const cast = await this.repository.fetchMovieCast(id);
      res.json(cast);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }
}