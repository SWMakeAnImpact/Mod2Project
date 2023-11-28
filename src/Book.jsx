// Import React to use JSX for rendering.
import React from 'react';

// Book component displays information about a single book.
function Book({ book }) {
  // Each book is wrapped in a div with class 'book'.
  return (
    <div className="book">
      {/* Image of the book. "?" ensures the app doesn't crash if the image or title isn't available. */}
      <img src={book.imageLinks?.thumbnail} alt={`Cover of ${book.title}`} />

      {/* Title of the book. */}
      <h3>{book.title}</h3>

      {/* List of authors, joined by commas if there's more than one. */}
      <p>{book.authors?.join(', ')}</p>

      {/* When the book was published. */}
      <p>Published on: {book.publishedDate}</p>

      {/* A short description of the book. */}
      <p>{book.description}</p>
    </div>
  );
}

export default Book;
