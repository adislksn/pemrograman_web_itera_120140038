import React from 'react';
import { useBookContext } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';
import './Stats.css';

const Stats = () => {
  const { books } = useBookContext();
  const stats = useBookStats(books);

  return (
    <div className="stats">
      <h1>Book Statistics</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p className="stat-number">{stats.totalBooks}</p>
        </div>
        <div className="stat-card">
          <h3>Owned Books</h3>
          <p className="stat-number">{stats.ownedBooks}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${stats.ownedPercentage}%` }}
            ></div>
          </div>
          <p className="percentage">{stats.ownedPercentage.toFixed(1)}%</p>
        </div>
        <div className="stat-card">
          <h3>Currently Reading</h3>
          <p className="stat-number">{stats.readingBooks}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${stats.readingPercentage}%` }}
            ></div>
          </div>
          <p className="percentage">{stats.readingPercentage.toFixed(1)}%</p>
        </div>
        <div className="stat-card">
          <h3>Wishlist</h3>
          <p className="stat-number">{stats.wishlistBooks}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${stats.wishlistPercentage}%` }}
            ></div>
          </div>
          <p className="percentage">{stats.wishlistPercentage.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Stats; 