import express from 'express';
import { SearchController } from '../controllers/searchController.mjs';

const router = express.Router();
const controller = new SearchController();

router.get('/movie/:query/:page', (req, res) => controller.SearchMovie(req, res));
router.get('/tv/:query/:page', controller.SearchTVShow.bind(controller));

export default router;