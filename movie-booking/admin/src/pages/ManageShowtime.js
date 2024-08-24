import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, modifyMovieShowtimes } from '../features/movieSlice';
import { AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';

const ManageShowtime = () => {
  const dispatch = useDispatch();
  const { list: movies, status: moviesStatus } = useSelector((state) => state.movies);
  const [editedMovies, setEditedMovies] = useState({});

  useEffect(() => {
    if (moviesStatus === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, moviesStatus]);

  const handleShowtimeChange = (movieId, index, value) => {
    setEditedMovies((prevState) => {
      const updatedShowtimes = [...prevState[movieId]?.showtimes || movies.find(movie => movie.id === movieId).showtimes];
      updatedShowtimes[index] = value;
      return {
        ...prevState,
        [movieId]: {
          ...prevState[movieId],
          showtimes: updatedShowtimes,
        },
      };
    });
  };

  const addShowtime = (movieId) => {
    setEditedMovies((prevState) => {
      const updatedShowtimes = [...prevState[movieId]?.showtimes || movies.find(movie => movie.id === movieId).showtimes];
      updatedShowtimes.push('');  // Add a single blank showtime
      return {
        ...prevState,
        [movieId]: {
          ...prevState[movieId],
          showtimes: updatedShowtimes,
        },
      };
    });
  };

  const removeShowtime = (movieId, index) => {
    setEditedMovies((prevState) => {
      const updatedShowtimes = [...prevState[movieId]?.showtimes || movies.find(movie => movie.id === movieId).showtimes];
      updatedShowtimes.splice(index, 1);
      return {
        ...prevState,
        [movieId]: {
          ...prevState[movieId],
          showtimes: updatedShowtimes,
        },
      };
    });
  };

  const saveShowtimes = (movieId) => {
    const updatedShowtimes = editedMovies[movieId]?.showtimes;
    if (updatedShowtimes) {
      dispatch(modifyMovieShowtimes({ id: movieId, showtimes: updatedShowtimes }));
      setEditedMovies((prevState) => {
        const newState = { ...prevState };
        delete newState[movieId];
        return newState;
      });
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Manage Showtimes</h2>
      <div className="space-y-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
            <p className="text-gray-600 mb-4">Release Date: {movie.releaseDate}</p>
            
            <div className="space-y-2">
              {editedMovies[movie.id]?.showtimes?.map((showtime, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="time"
                    value={showtime}
                    onChange={(e) => handleShowtimeChange(movie.id, index, e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    type="button"
                    onClick={() => removeShowtime(movie.id, index)}
                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                  >
                    <AiFillDelete />
                    <span className="ml-2">Remove</span>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addShowtime(movie.id)}
                className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 flex items-center"
              >
                <AiFillPlusCircle />
                <span className="ml-2">Modify Showtime</span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => saveShowtimes(movie.id)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Save Showtimes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageShowtime;
