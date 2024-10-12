import express from 'express';
import { SearchController } from '../controllers/searchController.mjs';

const router = express.Router();
const controller = new SearchController();

router.get('/movie/:query/:page', (req, res) => controller.SearchMovie(req, res));
router.get('/tv/:query/:page', controller.SearchMovie.bind(controller));

export default router;