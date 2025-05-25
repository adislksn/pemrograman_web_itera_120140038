import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const BookContext = createContext();

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'ADD_BOOK':
      return { ...state, books: [...state.books, action.payload] };
    case 'UPDATE_BOOK':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const addBook = (book) => {
    dispatch({ type: 'ADD_BOOK', payload: book });
  };

  const updateBook = (book) => {
    dispatch({ type: 'UPDATE_BOOK', payload: book });
  };

  const deleteBook = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        loading: state.loading,
        error: state.error,
        addBook,
        updateBook,
        deleteBook,
        setError,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
}; 