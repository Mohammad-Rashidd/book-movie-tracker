import express from "express";
const router = express.Router();
import Book from "../models/Book.js";
import auth from "../middleware/authMiddleware.js";

// Get all books for logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const books = await Book.find({ user: req.userId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a book
router.post("/", auth, async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = new Book({ title, author, year, user: req.userId });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get a single book by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.userId });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update book
router.put("/:id", auth, async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete book
router.delete("/:id", auth, async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
