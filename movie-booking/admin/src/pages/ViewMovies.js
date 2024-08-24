import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../features/movieSlice';

const ViewMovies = () => {
  const dispatch = useDispatch();
  const { list: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading movies...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white shadow-md rounded p-4">
          <img src={movie.posterImageUrl} alt={movie.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Language:</strong> {movie.language}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Showtimes:</strong> {movie.showtimes.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewMovies;
