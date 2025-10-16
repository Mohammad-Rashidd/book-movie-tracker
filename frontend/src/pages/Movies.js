import React, { useEffect, useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    year: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/movies", formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setMovies([...movies, res.data]);
      setFormData({ title: "", director: "", year: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="movies-page">
      <h1>Your Movies</h1>

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
          required
        />
        <button type="submit">Add Movie</button>
      </form>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
