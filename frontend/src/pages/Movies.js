import React, { useEffect, useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import MovieCard from "../components/MovieCard";
import "../styles/Movies.css";

const Movies = () => {
  const { user } = useContext(AuthContext);

  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    year: "",
    status: "To Watch",
  });
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [editingMovie, setEditingMovie] = useState(null);

  // Fetch movies
  const fetchMovies = async () => {
    try {
      const res = await api.get("/movies", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setMovies(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) fetchMovies();
  }, [user]);

  // Form handling
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingMovie) {
        // Update movie
        const res = await api.put(`/movies/${editingMovie._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setMovies(
          movies.map((m) => (m._id === editingMovie._id ? res.data : m))
        );
        setEditingMovie(null);
      } else {
        // Add movie
        const res = await api.post("/movies", formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setMovies([...movies, res.data]);
      }
      setFormData({ title: "", director: "", year: "", status: "To Watch" });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete movie
  const handleDelete = async (id) => {
    try {
      await api.delete(`/movies/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Edit movie
  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setFormData({
      title: movie.title,
      director: movie.director,
      year: movie.year,
      status: movie.status,
    });
  };

  // Filtered movies
  const filteredMovies = movies.filter((movie) => {
    return (
      (movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.director.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus ? movie.status === filterStatus : true)
    );
  });

  return (
    <div className="movies-page">
      <h1>My Movies</h1>

      {/* 📊 Stats */}
      <div className="movies-stats">
        <p>Total: {movies.length}</p>
        <p>Watched: {movies.filter((m) => m.status === "Watched").length}</p>
        <p>Watching: {movies.filter((m) => m.status === "Watching").length}</p>
        <p>To Watch: {movies.filter((m) => m.status === "To Watch").length}</p>
      </div>

      {/* 🔍 Search & Filter */}
      <div className="movies-controls">
        <input
          type="text"
          placeholder="Search by title or director..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="To Watch">To Watch</option>
          <option value="Watching">Watching</option>
          <option value="Watched">Watched</option>
        </select>
      </div>

      {/* ➕ Add / Edit Movie Form */}
      <form className="add-movie-form" onSubmit={handleSubmit}>
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
          name="director"
          placeholder="Director"
          value={formData.director}
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
          <option value="To Watch">To Watch</option>
          <option value="Watching">Watching</option>
          <option value="Watched">Watched</option>
        </select>
        <button type="submit">
          {editingMovie ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      {/* 🎬 Movie List */}
      <div className="movie-list">
        {filteredMovies.length ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <p className="empty-state">No movies found. Add your first movie!</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
