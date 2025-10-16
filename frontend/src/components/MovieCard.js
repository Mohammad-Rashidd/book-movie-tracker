// frontend/src/components/MovieCard.js
import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
    </div>
  );
};

export default MovieCard;
