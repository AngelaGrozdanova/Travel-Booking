import express from "express";
import { likeTour, unlikeTour } from "../controllers/tourController.js";

const router = express.Router();

router.put("/:id/like", likeTour);
router.put("/:id/unlike", unlikeTour);

export default router;
