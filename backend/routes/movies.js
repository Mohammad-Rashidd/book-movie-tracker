import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", auth, getMovies);
router.get("/:id", auth, getMovieById);
router.post("/", auth, addMovie);
router.put("/:id", auth, updateMovie);
router.delete("/:id", auth, deleteMovie);

export default router;
