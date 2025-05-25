import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';

describe('BookList', () => {
  const mockBooks = [
    {
      id: '1',
      title: 'Test Book 1',
      author: 'Author 1',
      status: 'owned'
    },
    {
      id: '2',
      title: 'Test Book 2',
      author: 'Author 2',
      status: 'reading'
    }
  ];

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    mockOnEdit.mockClear();
    mockOnDelete.mockClear();
  });

  test('renders empty state when no books', () => {
    render(<BookList books={[]} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    expect(screen.getByText(/no books found/i)).toBeInTheDocument();
  });

  test('renders list of books', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    expect(screen.getByText('Test Book 1')).toBeInTheDocument();
    expect(screen.getByText('By Author 1')).toBeInTheDocument();
    expect(screen.getByText('Test Book 2')).toBeInTheDocument();
    expect(screen.getByText('By Author 2')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    const editButtons = screen.getAllByText(/edit/i);
    fireEvent.click(editButtons[0]);
    
    expect(mockOnEdit).toHaveBeenCalledWith(mockBooks[0]);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[0]);
    
    expect(mockOnDelete).toHaveBeenCalledWith(mockBooks[0].id);
  });

  test('displays correct status badges', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    expect(screen.getByText('Owned')).toBeInTheDocument();
    expect(screen.getByText('Reading')).toBeInTheDocument();
  });
}); 