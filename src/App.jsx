import React, { useState, useEffect } from 'react';
import Booklist from './Booklist'; // Note to self Make sure file name matches

function App() {
  // Hooks to store books data and search terms
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('javascript');

  useEffect(() => {
    // Check if the API key has been correctly loaded from .env.local
    const isApiKeySet = Boolean(import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);
    console.log('API Key is set:', isApiKeySet);

    if (!isApiKeySet) {
      console.error('API key is not set. Please check your .env.local file.');
      return; // To prevent unnecessary fetch attempts
    }

    // Function to fetch data from Google Books API
    const fetchData = async () => {
      try {
        
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
        );
        const data = await response.json();
        setBooks(data.items || []); // Update the books state with the fetched data, or an empty array if undefined
      } catch (error) {
        console.error('Error fetching data: ', error); // Log errors that occur during fetch
      }
    };

    fetchData(); // Invoke the fetchData function when the component mounts or searchTerm changes
  }, [searchTerm]); // Dependency array for useEffect
  return (
    <div className="App">
      <h1>Google Books Search</h1>
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state when input changes
      />
      <Booklist books={books} /> {/* Render the Booklist component, passing the books state*/}
    </div>
  );
}

export default App; // Export App component as default export
