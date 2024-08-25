import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={movie.posterImageUrl}
        alt={movie.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
        <p className="text-gray-600 mb-4">{movie.genre}</p>
        <div className="flex items-center mb-4">
          <AiFillStar className="text-yellow-500" />
          <span className="ml-1 text-gray-800 font-semibold">
            {movie.imdbRating}
          </span>
        </div>
        <Link
          to={`/movies/${movie.id}`}
          className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
