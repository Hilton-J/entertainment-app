import express from "express";
import { TrendingController } from "../controllers/trendingController.mjs";

const router = express.Router();

const controller = new TrendingController();

router.get('/', controller.getTrendingMovies.bind(controller));

export default router;