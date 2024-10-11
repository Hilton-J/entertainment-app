import express from 'express';
import { TVShowController } from '../controllers/tvShowController.mjs';

const router = express.Router();
const controller = new TVShowController();

router.get('/:page/:genres',
  controller.dicoverTVShow.bind(controller)
);

router.get('/:page',
  controller.dicoverTVShow1.bind(controller)
);

export default router;