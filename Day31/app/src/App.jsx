import React, { useState } from 'react';
import BookList from './BookList';
import AuthorList from './AuthorList';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <div>
      <h1>Library Management System</h1>
      <div className="container">
        <div className="left-panel">
          <BookList books={books} editBook={editBook} deleteBook={deleteBook} />
          <AuthorList authors={authors} editAuthor={editAuthor} deleteAuthor={deleteAuthor} />
        </div>
        <div className="right-panel">
          <BookForm onSubmit={submitBook} initialValues={selectedBook} />
          <AuthorForm onSubmit={submitAuthor} initialValues={selectedAuthor} />
        </div>
      </div>
    </div>
  );
}

export default App;
