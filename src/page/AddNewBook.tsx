// AddNewBookForm.tsx
import React, { useState } from 'react';

const AddNewBookForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the book data to your backend or perform any necessary API call here
    try {
      // Example: Send a POST request to your API
      // const response = await fetch('/api/add-book', {
      //   method: 'POST',
      //   body: JSON.stringify({ title, author, genre, publicationDate }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // Handle success or error responses here
      // const data = await response.json();
      // if (response.ok) {
      //   setNotification('Book added successfully.');
      // } else {
      //   setNotification('Failed to add the book. Please try again.');
      // }
      setNotification('Book added successfully.');
    } catch (error) {
      console.error(error);
      setNotification('Failed to add the book. Please try again.');
    }
  };

  return (
    <div className='text-center '>
      <h2 className='my-8 text-3xl font-bold text-center ' >Add New Book</h2>
      <form onSubmit={handleSubmit} className='w-1/3 p-8 mx-auto my-10 border-2 rounded-xl border-neutral'>
        <div  className='my-3 font-bold'>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='my-3 font-bold'>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className='my-3 font-bold'>
          <label>Genre:</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className='my-3 font-bold'>
          <label>Publication Date:</label>
          <input
            type="text"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
        <button className='btn btn-neutral' type="submit">Submit</button>
      </form>
      {notification && <div>{notification}</div>}
    </div>
  );
};

export default AddNewBookForm;
