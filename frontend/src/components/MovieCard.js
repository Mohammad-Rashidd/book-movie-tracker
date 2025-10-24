import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ movie, onDelete, onEdit }) => {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        {movie.year && (
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
        )}
        <span
          className={`status ${movie.status.toLowerCase().replace(" ", "-")}`}
        >
          {movie.status}
        </span>
      </div>

      <div className="movie-actions">
        <button className="edit-btn" onClick={() => onEdit(movie)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(movie._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
