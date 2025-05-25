# Books Management

A modern web application for managing your personal book collection. Built with React, this application allows you to track books you own, are currently reading, or wish to read in the future.

## Features

- 📚 Add, edit, and delete books
- 🔍 Search books by title or author
- 🏷️ Filter books by status (owned, reading, wishlist)
- 📊 View book collection statistics
- 💾 Persistent storage using localStorage
- 📱 Responsive design for all devices

## Technologies Used

- React 18
- React Router v6
- Context API for state management
- Custom Hooks
- PropTypes for type checking
- React Testing Library
- Modern CSS with Flexbox and Grid

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd adisulaksono_120140038_pertemuan3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── BookForm/      # Form for adding/editing books
│   ├── BookList/      # List of books with actions
│   └── BookFilter/    # Search and filter controls
├── pages/
│   ├── Home/         # Main page with book management
│   └── Stats/        # Statistics dashboard
├── hooks/
│   ├── useLocalStorage.js
│   └── useBookStats.js
├── context/
│   └── BookContext.js
└── App.js
```

## Usage

### Adding a Book
1. Navigate to the Home page
2. Fill in the book details (title, author, status)
3. Click "Add Book"

### Managing Books
- Edit: Click the "Edit" button on any book card
- Delete: Click the "Delete" button and confirm
- Filter: Use the dropdown to filter by status
- Search: Type in the search box to find books

### Viewing Statistics
- Click "Statistics" in the navigation bar
- View your book collection metrics
- See distribution of books by status

## Testing

Run the test suite:
```bash
npm run test
```

The application includes unit tests for:
- Form validation
- Book list rendering
- Component interactions
- State management

## Author

Adi Sulaksono - 120140038
