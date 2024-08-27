import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBookedMovies } from '../services/movieService';

export const fetchBookedMovies = createAsyncThunk(
  'bookedMovies/fetchBookedMovies',
  async () => {
    const response = await getBookedMovies();
    return response;
  }
);

const bookedMoviesSlice = createSlice({
  name: 'bookedMovies',
  initialState: {
    bookedMovies: [],
    status: 'idle', 
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
        state.bookedMovies = action.payload
          ? Object.keys(action.payload).map(key => ({
              id: key, 
              ...action.payload[key], 
            }))
          : [];
      })
      .addCase(fetchBookedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookedMoviesSlice.reducer;
