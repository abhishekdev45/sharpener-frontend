import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookingForm from '../components/BookingForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { list: movies } = useSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === movieId);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <img src={movie.posterImageUrl} alt={movie.name} className="mb-6 w-full h-96 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mb-4">{movie.name}</h1>
        <p className="text-gray-600 mb-4">{movie.description}</p>
        <p className="text-gray-600 mb-2"><strong>Director:</strong> {movie.director}</p>
        <p className="text-gray-600 mb-2"><strong>Genre:</strong> {movie.genre}</p>
        <p className="text-gray-600 mb-2"><strong>Release Date:</strong> {movie.releaseDate}</p>
        <p className="text-gray-600 mb-2"><strong>Language:</strong> {movie.language}</p>
        <p className="text-gray-600 mb-4"><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        <button
          onClick={handleBooking}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Book Tickets
        </button>
      </div>
      {isBookingOpen && <BookingForm movie={movie} onClose={handleCloseBooking} />}
      <ToastContainer />
    </div>
  );
};

export default MovieDetails;