import React from "react";

function BookDetailsModal({ book, onReturn, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
        >
          X
        </button>
        <img
          src={book.image}
          alt={book.title}
          className="w-32 h-48 object-cover mb-4 mx-auto"
        />
        <h2 className="text-3xl font-semibold text-center mb-4">{book.title}</h2>
        <p className="text-xl text-gray-700 text-center">{book.author}</p>
        <p className="text-sm text-gray-500 text-center">{book.category}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Borrowing History</h3>
          <ul className="list-disc pl-6">
            {book.history.length > 0 ? (
              book.history.map((date, index) => <li key={index}>{date}</li>)
            ) : (
              <li>No history</li>
            )}
          </ul>
        </div>

        <div className="mt-6">
          {book.borrowed ? (
            <button
              onClick={() => onReturn(book.id)}
              className="bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Return Book
            </button>
          ) : (
            <span className="ml-4 text-green-500">Book Returned</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetailsModal;
