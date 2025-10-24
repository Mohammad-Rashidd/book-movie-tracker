import React, { useEffect, useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import BookCard from "../components/BookCard";
import "../styles/Books.css";

const Books = () => {
  const { user } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    status: "To Read",
  });
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [editingBook, setEditingBook] = useState(null);

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await api.get("/books", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) fetchBooks();
  }, [user]);

  // Form handling
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBook) {
        // Update book
        const res = await api.put(`/books/${editingBook._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setBooks(books.map((b) => (b._id === editingBook._id ? res.data : b)));
        setEditingBook(null);
      } else {
        // Add new book
        const res = await api.post("/books", formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setBooks([...books, res.data]);
      }
      setFormData({ title: "", author: "", year: "", status: "To Read" });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete book
  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Edit book
  const handleEdit = (book) => {
    setEditingBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      year: book.year,
      status: book.status,
    });
  };

  // Filtered books
  const filteredBooks = books.filter((book) => {
    return (
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus ? book.status === filterStatus : true)
    );
  });

  return (
    <div className="books-page">
      <h1>My Books</h1>

      {/* 📊 Stats */}
      <div className="books-stats">
        <p>Total: {books.length}</p>
        <p>Read: {books.filter((b) => b.status === "Read").length}</p>
        <p>
          Currently Reading:{" "}
          {books.filter((b) => b.status === "Reading").length}
        </p>
        <p>To Read: {books.filter((b) => b.status === "To Read").length}</p>
      </div>

      {/* 🔍 Search & Filter */}
      <div className="books-controls">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="To Read">To Read</option>
          <option value="Reading">Reading</option>
          <option value="Read">Read</option>
        </select>
      </div>

      {/* ➕ Add / Edit Book Form */}
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="To Read">To Read</option>
          <option value="Reading">Reading</option>
          <option value="Read">Read</option>
        </select>
        <button type="submit">
          {editingBook ? "Update Book" : "Add Book"}
        </button>
      </form>

      {/* 📚 Book List */}
      <div className="book-list">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <p className="empty-state">No books found. Add your first book!</p>
        )}
      </div>
    </div>
  );
};

export default Books;
