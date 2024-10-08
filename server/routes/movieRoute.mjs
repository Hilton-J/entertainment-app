import express from 'express'
import { MovieController } from '../controllers/movieController.mjs'

const router = express.Router();

const controller = new MovieController();

router.get('/',
  controller.discoverMovies.bind(controller)
);

export default router;