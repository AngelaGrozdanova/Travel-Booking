import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
  likeTour,
  unlikeTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createTour);

router.put("/:id", verifyAdmin, updateTour);

router.delete("/:id", deleteTour);

router.get("/:id", getSingleTour);

router.get("/", getAllTour);

router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

router.put("/:id/like", likeTour);
router.put("/:id/unlike", unlikeTour);

export default router;
