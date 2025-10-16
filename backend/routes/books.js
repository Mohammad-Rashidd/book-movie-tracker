import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  getBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", auth, getBooks);
router.post("/", auth, addBook);
router.get("/:id", auth, getBookById);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

export default router;
