// backend/controllers/bookController.js
import Book from "../models/Book.js";

// Get all books for logged-in user
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.userId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new book
export const addBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = new Book({ title, author, year, user: req.userId });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.userId });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update book
export const updateBook = async (req, res) => {
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
};

// Delete book
export const deleteBook = async (req, res) => {
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
};
