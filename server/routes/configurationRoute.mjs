import express from 'express';
import { ConfigurationController } from '../controllers/configurationController.mjs';

const router = express.Router();
const controller = new ConfigurationController();

router.get('/languages', controller.getLanguagesHandler.bind(controller));
router.get('/countries', controller.getCountriesHandler.bind(controller));

export default router;