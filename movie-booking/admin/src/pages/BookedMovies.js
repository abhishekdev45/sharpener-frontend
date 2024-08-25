import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedMovies } from '../features/bookedMoviesSlice';

const BookedMovies = () => {
  const dispatch = useDispatch();
  const { bookedMovies, status } = useSelector((state) => state.bookedMovies);

  useEffect(() => {
    dispatch(fetchBookedMovies());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Booked Movies</h2>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 bg-gray-200">User Name</th>
              <th className="text-left py-2 px-4 bg-gray-200">Email</th>
              <th className="text-left py-2 px-4 bg-gray-200">Movie Name</th>
              <th className="text-left py-2 px-4 bg-gray-200">Showtime</th>
            </tr>
          </thead>
          <tbody>
            {bookedMovies && bookedMovies.length > 0 ? (
              bookedMovies.map((booking) => (
                <tr key={booking.id}>
                  <td className="py-2 px-4 border-t">{booking.name}</td>
                  <td className="py-2 px-4 border-t">{booking.email}</td>
                  <td className="py-2 px-4 border-t">{booking.movieName}</td>
                  <td className="py-2 px-4 border-t">{booking.showtime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 text-center">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookedMovies;
