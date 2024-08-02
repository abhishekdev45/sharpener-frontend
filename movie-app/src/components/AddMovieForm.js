import React, { useState, useCallback } from 'react';
import './AddMovieForm.module.css'; 

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [openingText, setOpeningText] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const submitHandler = useCallback((event) => {
    event.preventDefault();

    const newMovie = {
      id: Math.random().toString(),
      title,
      openingText,
      releaseDate,
    };

    console.log(newMovie);
    onAddMovie(newMovie);

    setTitle('');
    setOpeningText('');
    setReleaseDate('');
  }, [title, openingText, releaseDate, onAddMovie]);

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="openingText">Opening Text</label>
        <textarea
          id="openingText"
          value={openingText}
          onChange={(event) => setOpeningText(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
