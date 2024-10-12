import express from 'express';
import { TVShowController } from '../controllers/tvShowController.mjs';

const router = express.Router();
const controller = new TVShowController();

router.get('/genre', controller.tvShowGenres.bind(controller));
router.get('/show/:page', controller.dicoverTVShow.bind(controller));
router.get('/discover/:page/genres/:genres', controller.dicoverTVShowWithGenres.bind(controller));
router.get('/tv-id/:id', (req, res) => controller.fetchTVShowByID(req, res));
router.get('/credits/:id', (req, res) => controller.fetchTVShowCast(req, res));

export default router;