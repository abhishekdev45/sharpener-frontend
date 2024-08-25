import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sendEmailConfirmation } from '../services/emailService';  // Implement this service

const BookingConfirmation = () => {
  const { movieId } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === movieId);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    showtime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleBooking = async () => {
    // Code to save booking details to Firebase and send email confirmation
    await sendEmailConfirmation(bookingDetails, movie);
    alert('Booking confirmed! Confirmation email sent.');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Book Tickets for {movie.name}</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Showtime</label>
          <select
            name="showtime"
            value={bookingDetails.showtime}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Showtime</option>
            {movie.showtimes.map((showtime, index) => (
              <option key={index} value={showtime}>{showtime}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={bookingDetails.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleBooking}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
