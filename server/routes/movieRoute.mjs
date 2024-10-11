import express from 'express'
import { MovieController } from '../controllers/movieController.mjs'
// import axios from 'axios'

const router = express.Router();

const controller = new MovieController();

router.get('/:page',
  controller.discoverMovies1.bind(controller)
);

router.get('/:page/:genres',
  controller.discoverMovies.bind(controller)
);

router.get('/',
  controller.movieGenres.bind(controller)
);

export default router;