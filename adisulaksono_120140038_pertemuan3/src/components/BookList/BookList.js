import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

const BookList = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return <p className="no-books">No books found.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book-info">
            <h3>{book.title}</h3>
            <p className="author">By {book.author}</p>
            <span className={`status-badge ${book.status}`}>
              {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
            </span>
          </div>
          <div className="book-actions">
            <button
              onClick={() => onEdit(book)}
              className="edit-button"
              aria-label="Edit book"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="delete-button"
              aria-label="Delete book"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['owned', 'reading', 'wishlist']).isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList; 