import { useMemo } from 'react';
import PropTypes from 'prop-types';

const useBookStats = (books) => {
  const stats = useMemo(() => {
    const totalBooks = books.length;
    const ownedBooks = books.filter((book) => book.status === 'owned').length;
    const readingBooks = books.filter((book) => book.status === 'reading').length;
    const wishlistBooks = books.filter((book) => book.status === 'wishlist').length;

    return {
      totalBooks,
      ownedBooks,
      readingBooks,
      wishlistBooks,
      ownedPercentage: totalBooks ? (ownedBooks / totalBooks) * 100 : 0,
      readingPercentage: totalBooks ? (readingBooks / totalBooks) * 100 : 0,
      wishlistPercentage: totalBooks ? (wishlistBooks / totalBooks) * 100 : 0,
    };
  }, [books]);

  return stats;
};

useBookStats.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['owned', 'reading', 'wishlist']).isRequired,
    })
  ).isRequired,
};

export default useBookStats; 