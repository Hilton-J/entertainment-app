import express from 'express';
import { MovieController } from '../controllers/movieController.mjs';

const router = express.Router();
const controller = new MovieController();

router.get('/genre', controller.movieGenres.bind(controller));
router.get('/movies/:page', controller.discoverMovies.bind(controller));
router.get('/dicover/:page/genres/:genres?sort_by=:sort', controller.discoverMoviesWithGenres.bind(controller));
router.get('/movie-id/:id', (req, res) => controller.fetchMovieByID(req, res));
router.get('/credits/:id', (req, res) => controller.fetchMovieCast(req, res));

export default router;