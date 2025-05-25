import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

describe('BookForm', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('renders form with empty fields', () => {
    render(<BookForm onSubmit={mockOnSubmit} />);
    
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Add Book');
  });

  test('renders form with initial data', () => {
    const initialData = {
      title: 'Test Book',
      author: 'Test Author',
      status: 'reading'
    };

    render(<BookForm onSubmit={mockOnSubmit} initialData={initialData} />);
    
    expect(screen.getByLabelText(/title/i)).toHaveValue('Test Book');
    expect(screen.getByLabelText(/author/i)).toHaveValue('Test Author');
    expect(screen.getByLabelText(/status/i)).toHaveValue('reading');
    expect(screen.getByRole('button')).toHaveTextContent('Update Book');
  });

  test('shows validation errors for empty fields', () => {
    render(<BookForm onSubmit={mockOnSubmit} />);
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/author is required/i)).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('submits form with valid data', () => {
    render(<BookForm onSubmit={mockOnSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: 'Test Book' }
    });
    fireEvent.change(screen.getByLabelText(/author/i), {
      target: { value: 'Test Author' }
    });
    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: 'owned' }
    });
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'Test Book',
      author: 'Test Author',
      status: 'owned'
    });
  });
}); 