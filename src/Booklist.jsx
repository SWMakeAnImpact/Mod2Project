// Importing React and the Book component.
import React from 'react';
import Book from './Book';

// Booklist component takes an array of books as a prop.
function Booklist({ books }) {
  // Renders a l "Ftist of Book components.
  return (
    <div className="book-list">
      {/* Loop over each book in the array. */}
      {books.map((book) => (
        // For each book, render a Book component.
        // Use 'book.id' for React key (important for lists in React).
        // Pass the book's info to the Book component.
        <Book key={book.id} book={book.volumeInfo} />
      ))}
    </div>
  );
}

// Exporting Booklist so it can be used in other parts of the app.
export default Booklist;
