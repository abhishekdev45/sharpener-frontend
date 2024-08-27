import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_FIREBASE_DB_URL;

export const addMovie = async (movieData) => {
  const url = `${API_BASE_URL}/movies.json`;
  const response = await axios.post(url, movieData);
  return response.data;
};

export const getMovies = async () => {
  const url = `${API_BASE_URL}/movies.json`;
  const response = await axios.get(url);
  return response.data;
};

export const updateMovieShowtimes = async (movieId, showtimes) => {
  const url = `${API_BASE_URL}/movies/${movieId}.json`;
  const response = await axios.patch(url, { showtimes });
  return response.data;
};

export const getBookedMovies = async () => {
  const url = `${API_BASE_URL}/bookings.json`;
  const response = await axios.get(url);
  return response.data;
};