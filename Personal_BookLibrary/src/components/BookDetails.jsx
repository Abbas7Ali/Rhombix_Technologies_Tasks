import React from "react";

function BookDetails({ book, onReturn, onClose }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={book.image} alt={book.title} className="w-52 h-72 object-cover mb-4" />
      <h2 className="text-3xl font-semibold">{book.title}</h2>
      <p className="text-xl text-gray-700">{book.author}</p>
      <p className="text-sm text-gray-500">{book.category}</p>

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
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Return Book
          </button>
        ) : (
          <span className="ml-4 text-green-500">Book Returned</span>
        )}
      </div>

      <div className="mt-4">
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close History
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
