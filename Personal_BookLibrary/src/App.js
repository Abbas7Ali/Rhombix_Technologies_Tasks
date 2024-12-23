import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";
import AddBookModal from "./components/AddBookModal";

function App() {
  // Retrieve books from local storage, or use default if not found
  const loadBooksFromLocalStorage = () => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  };

  const [allBooks, setAllBooks] = useState(loadBooksFromLocalStorage());
  const [books, setBooks] = useState(allBooks);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingBook, setIsAddingBook] = useState(false);

  // Save books to local storage whenever books change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(allBooks));
  }, [allBooks]);

  // Handle book search
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      // Reset books list to all books when search query is cleared
      setBooks(allBooks);
    } else {
      // Filter books based on the search query (title, author, category)
      const filteredBooks = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.category.toLowerCase().includes(query.toLowerCase()) // added category filter
      );
      setBooks(filteredBooks);
    }
  };

  // Handle adding a new book
  const handleAddBook = (newBook) => {
    const updatedBooks = [...allBooks, newBook];
    setAllBooks(updatedBooks); // Update allBooks
    setBooks(updatedBooks); // Update filtered books list (this will also trigger a re-render)
    setIsAddingBook(false); // Close the add book modal after adding
  };

  // Handle cancel action (close the add book modal)
  const handleCancelAddBook = () => {
    setIsAddingBook(false); // Close the add book modal
  };

  // Handle borrowing or returning a book
  const handleBorrowReturn = (bookId) => {
    const updatedBooks = allBooks.map((book) => {
      if (book.id === bookId) {
        // Toggle the borrowed status
        book.borrowed = !book.borrowed;
      }
      return book;
    });
    setAllBooks(updatedBooks); // Update allBooks
    setBooks(updatedBooks); // Update the displayed books list
  };

  // Handle deleting a book
  const handleDeleteBook = (bookId) => {
    const updatedBooks = allBooks.filter((book) => book.id !== bookId);
    setAllBooks(updatedBooks); // Update allBooks
    setBooks(updatedBooks); // Update the displayed books list
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-4xl text-center mb-6">Personal Book Library</h1>

      <BookSearch onSearch={handleSearch} query={searchQuery} />

      {isAddingBook ? (
        <AddBookModal
          onAddBook={handleAddBook} // Pass handleAddBook as a prop to AddBookModal
          onCancel={handleCancelAddBook}
        />
      ) : (
        <>
          <button
            onClick={() => setIsAddingBook(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
          >
            Add New Book
          </button>
          <BookList
            books={books}
            onBorrowReturn={handleBorrowReturn}
            onDeleteBook={handleDeleteBook}
          />
        </>
      )}
    </div>
  );
}

export default App;
