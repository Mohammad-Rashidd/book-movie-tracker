import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";
import "../styles/Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);

  // Fetch books and movies for stats & recent items
  const fetchData = async () => {
    try {
      const booksRes = await api.get("/books", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const moviesRes = await api.get("/movies", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setBooks(booksRes.data);
      setMovies(moviesRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  return (
    <div className="home-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome, {user?.username || "Guest"}!</h1>
        <p>Track your favorite books and movies all in one place.</p>
      </section>

      {/* Quick Actions */}
      <section className="home-actions">
        <Link to="/books">
          <button className="action-btn">📚 Go to Books</button>
        </Link>
        <Link to="/movies">
          <button className="action-btn">🎬 Go to Movies</button>
        </Link>
      </section>

      {/* Dashboard Stats */}
      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Books</h3>
          <p>Total: {books.length}</p>
          <p>Read: {books.filter((b) => b.status === "Read").length}</p>
          <p>Reading: {books.filter((b) => b.status === "Reading").length}</p>
          <p>To Read: {books.filter((b) => b.status === "To Read").length}</p>
        </div>

        <div className="stat-card">
          <h3>Movies</h3>
          <p>Total: {movies.length}</p>
          <p>Watched: {movies.filter((m) => m.status === "Watched").length}</p>
          <p>
            Watching: {movies.filter((m) => m.status === "Watching").length}
          </p>
          <p>
            To Watch: {movies.filter((m) => m.status === "To Watch").length}
          </p>
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="recent-section">
        <h2>Recently Added Books</h2>
        <div className="recent-list">
          {books.slice(-4).map((book) => (
            <div key={book._id} className="recent-card">
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
              <p>Status: {book.status}</p>
            </div>
          ))}
          {books.length === 0 && <p>No books added yet.</p>}
        </div>

        <h2>Recently Added Movies</h2>
        <div className="recent-list">
          {movies.slice(-4).map((movie) => (
            <div key={movie._id} className="recent-card">
              <h4>{movie.title}</h4>
              <p>Director: {movie.director}</p>
              <p>Status: {movie.status}</p>
            </div>
          ))}
          {movies.length === 0 && <p>No movies added yet.</p>}
        </div>
      </section>
    </div>
  );
};

export default Home;
