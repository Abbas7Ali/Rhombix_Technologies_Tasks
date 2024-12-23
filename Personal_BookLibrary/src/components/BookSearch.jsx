import React from "react";

function BookSearch({ onSearch, query }) {
  const handleChange = (e) => {
    onSearch(e.target.value); // Pass the updated search query to parent
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title, author, or category..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default BookSearch;
