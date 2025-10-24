import React from "react";
import "../styles/BookCard.css";

const BookCard = ({ book, onDelete, onEdit }) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        {book.year && (
          <p>
            <strong>Year:</strong> {book.year}
          </p>
        )}
        <span
          className={`status ${book.status.toLowerCase().replace(" ", "-")}`}
        >
          {book.status}
        </span>
      </div>

      <div className="book-actions">
        <button className="edit-btn" onClick={() => onEdit(book)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(book._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
