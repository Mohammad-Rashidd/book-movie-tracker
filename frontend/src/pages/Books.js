import React, { useEffect, useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import BookCard from "../components/BookCard";

const Books = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({ title: "", author: "", year: "" });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/books", formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setBooks([...books, res.data]);
      setFormData({ title: "", author: "", year: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="books-page">
      <h1>Your Books</h1>

      <form onSubmit={handleSubmit}>
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
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
