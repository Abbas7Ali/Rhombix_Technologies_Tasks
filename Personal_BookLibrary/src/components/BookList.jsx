import React from "react";

function BookList({ books, onBorrowReturn, onDeleteBook }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="book-item bg-white border p-4 rounded mb-4 flex">
            {/* Displaying Book Image */}
            <div className="book-image mr-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-52 h-72 object-cover rounded"
              />
            </div>

            {/* Displaying Book Information */}
            <div className="book-details flex-1">
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Published: {book.publishedDate}</p>
              <p>Uploaded: {book.uploadedDateTime}</p>
              
              {/* Borrow/Return Button */}
              <button
                onClick={() => onBorrowReturn(book.id)}
                className={`${
                  book.borrowed ? "bg-green-500" : "bg-yellow-500"
                } text-white px-4 py-2 rounded mr-2`}
              >
                {book.borrowed ? "Return" : "Borrow"}
              </button>

              {/* Delete Button */}
              <button
                onClick={() => onDeleteBook(book.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
