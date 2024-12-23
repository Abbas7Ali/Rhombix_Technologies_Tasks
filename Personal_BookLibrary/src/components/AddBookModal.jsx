import React, { useState } from "react";

function AddBookModal({ onAddBook, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [image, setImage] = useState(null);
  const [uploadedDateTime, setUploadedDateTime] = useState(new Date().toLocaleString());
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Save image URL
        setImage(file); // Save the file object
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: new Date().getTime(),
      title,
      author,
      category,
      publishedDate,
      image: imageUrl, // Store image URL in book data
      uploadedDateTime,
      borrowed: false, // Default value for borrowed status
    };

    onAddBook(newBook); // Add the new book
    setTitle(""); // Reset form
    setAuthor("");
    setCategory("");
    setPublishedDate("");
    setImage(null);
    setUploadedDateTime(new Date().toLocaleString());
    setImageUrl(""); // Reset image
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">Published Date:</label>
            <input
              id="publishedDate"
              type="date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Image Upload */}
          <div>
            <label htmlFor="bookImage" className="block text-sm font-medium text-gray-700">Book Image:</label>
            <input
              id="bookImage"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 p-2 w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Display the uploaded image */}
          {imageUrl && (
            <div className="mt-2">
              <img src={imageUrl} alt="Book" className="w-32 h-32 object-cover rounded-md" />
            </div>
          )}
  
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Book
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}  

export default AddBookModal;
