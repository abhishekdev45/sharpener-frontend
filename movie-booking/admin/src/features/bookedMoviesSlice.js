import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace with your actual Firebase URL
const FIREBASE_BOOKED_MOVIES_URL = 'https://your-firebase-url/booked-movies.json';

// Async thunk to fetch booked movies
export const fetchBookedMovies = createAsyncThunk(
  'bookedMovies/fetchBookedMovies',
  async () => {
    const response = await axios.get(FIREBASE_BOOKED_MOVIES_URL);
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
        state.bookedMovies = action.payload;
      })
      .addCase(fetchBookedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookedMoviesSlice.reducer;
