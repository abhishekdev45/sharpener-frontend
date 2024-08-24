import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMovie } from '../features/movieSlice';
import { fetchCategories } from '../features/categorySlice';

const AddMovie = () => {
  const [movieDetails, setMovieDetails] = useState({
    name: '',
    description: '',
    director: '',
    genre: '',
    releaseDate: '',
    language: '',
    imdbRating: '',
    posterImageUrl: '',
    category: '',
    showtimes: [],
  });

  const dispatch = useDispatch();
  const { list: categories, status: categoriesStatus } = useSelector((state) => state.categories);

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, categoriesStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({
      ...movieDetails,
      [name]: value,
    });
  };

  const handleShowtimeChange = (index, value) => {
    const updatedShowtimes = movieDetails.showtimes.map((time, i) =>
      i === index ? value : time
    );
    setMovieDetails({
      ...movieDetails,
      showtimes: updatedShowtimes,
    });
  };

  const addShowtime = () => {
    setMovieDetails({
      ...movieDetails,
      showtimes: [...movieDetails.showtimes, ''],
    });
  };

  const removeShowtime = (index) => {
    const updatedShowtimes = movieDetails.showtimes.filter((_, i) => i !== index);
    setMovieDetails({
      ...movieDetails,
      showtimes: updatedShowtimes,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createMovie(movieDetails));
    setMovieDetails({
      name: '',
      description: '',
      director: '',
      genre: '',
      releaseDate: '',
      language: '',
      imdbRating: '',
      posterImageUrl: '',
      category: '',
      showtimes: [],
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* <h2 className="text-2xl font-bold text-center mb-6">Add Movie</h2> */}
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Movie Name */}
            <div>
              <label className="block text-gray-700 mb-2">Movie Name</label>
              <input
                type="text"
                name="name"
                value={movieDetails.name}
                onChange={handleChange}
                placeholder="Movie Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <input
                type="text"
                name="description"
                value={movieDetails.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Director */}
            <div>
              <label className="block text-gray-700 mb-2">Director</label>
              <input
                type="text"
                name="director"
                value={movieDetails.director}
                onChange={handleChange}
                placeholder="Director"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block text-gray-700 mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                value={movieDetails.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Release Date */}
            <div>
              <label className="block text-gray-700 mb-2">Release Date</label>
              <input
                type="date"
                name="releaseDate"
                value={movieDetails.releaseDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-gray-700 mb-2">Language</label>
              <input
                type="text"
                name="language"
                value={movieDetails.language}
                onChange={handleChange}
                placeholder="Language"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* IMDB Rating */}
            <div>
              <label className="block text-gray-700 mb-2">IMDB Rating</label>
              <input
                type="number"
                step="0.1"
                name="imdbRating"
                value={movieDetails.imdbRating}
                onChange={handleChange}
                placeholder="IMDB Rating"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Poster Image URL */}
            <div>
              <label className="block text-gray-700 mb-2">Poster Image URL</label>
              <input
                type="url"
                name="posterImageUrl"
                value={movieDetails.posterImageUrl}
                onChange={handleChange}
                placeholder="Poster Image URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Category */}
            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={movieDetails.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Showtimes */}
            <div className="col-span-2">
              <div className="flex justify-between">
              <label className=" text-gray-700 mb-2">Showtimes</label>
              <button
                type="button"
                onClick={addShowtime}
                className="mb-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
              >
                Add Showtime
              </button>
              </div>
              {movieDetails.showtimes.map((showtime, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="time"
                    value={showtime}
                    onChange={(e) => handleShowtimeChange(index, e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    type="button"
                    onClick={() => removeShowtime(index)}
                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
              
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
