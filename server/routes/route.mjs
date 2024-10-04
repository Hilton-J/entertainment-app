import express from "express";
import { Controller } from "../controllers/controller.mjs";

const router = express.Router();
const controller = new Controller();

router.get('/trending', controller.getTrending);

export default router;