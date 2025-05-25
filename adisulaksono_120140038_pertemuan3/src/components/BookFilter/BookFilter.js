import React from 'react';
import PropTypes from 'prop-types';
import './BookFilter.css';

const BookFilter = ({ onFilterChange, onSearchChange }) => {
  return (
    <div className="book-filter">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search books..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-options">
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Books</option>
          <option value="owned">Owned</option>
          <option value="reading">Reading</option>
          <option value="wishlist">Wishlist</option>
        </select>
      </div>
    </div>
  );
};

BookFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default BookFilter; 