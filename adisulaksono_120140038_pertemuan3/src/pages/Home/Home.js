import React, { useState, useEffect } from 'react';
import { useBookContext } from '../../context/BookContext';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

const Home = () => {
  const { books, addBook, updateBook, deleteBook } = useBookContext();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingBook, setEditingBook] = useState(null);
  const [storedBooks, setStoredBooks] = useLocalStorage('books', []);

  useEffect(() => {
    if (storedBooks.length > 0) {
      setStoredBooks(books);
    }
  }, [books]);

  useEffect(() => {
    let filtered = [...books];

    if (statusFilter !== 'all') {
      filtered = filtered.filter((book) => book.status === statusFilter);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower)
      );
    }

    setFilteredBooks(filtered);
  }, [books, statusFilter, searchTerm]);

  const handleSubmit = (bookData) => {
    if (editingBook) {
      updateBook({ ...bookData, id: editingBook.id });
      setEditingBook(null);
    } else {
      addBook({ ...bookData, id: Date.now().toString() });
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      deleteBook(id);
    }
  };

  return (
    <div className="home">
      <h1>Books Management</h1>
      <BookFilter
        onFilterChange={setStatusFilter}
        onSearchChange={setSearchTerm}
      />
      <div className="content">
        <div className="form-section">
          <h2>{editingBook ? 'Edit Book' : 'Add New Book'}</h2>
          <BookForm onSubmit={handleSubmit} initialData={editingBook} />
        </div>
        <div className="list-section">
          <h2>Book List</h2>
          <BookList
            books={filteredBooks}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Home; 