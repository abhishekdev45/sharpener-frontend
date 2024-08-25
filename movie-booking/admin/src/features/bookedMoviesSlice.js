import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace with your actual Firebase URL
const API_BASE_URL = process.env.REACT_APP_FIREBASE_DB_URL;

// Async thunk to fetch booked movies
export const fetchBookedMovies = createAsyncThunk(
  'bookedMovies/fetchBookedMovies',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/bookings.json`);
    return response.data;
  }
);

const bookedMoviesSlice = createSlice({
  name: 'bookedMovies',
  initialState: {
    bookedMovies: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookedMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';

        // Convert Firebase object to an array
        if (action.payload) {
          state.bookedMovies = Object.keys(action.payload).map(key => ({
            id: key, // Use the key as the ID
            ...action.payload[key], // Spread the booking data
          }));
        } else {
          state.bookedMovies = [];
        }
      })
      .addCase(fetchBookedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookedMoviesSlice.reducer;
