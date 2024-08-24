import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addMovie, getMovies, updateMovieShowtimes } from '../services/movieService';

export const fetchMovies = createAsyncThunk('movies/fetch', async () => {
  const response = await getMovies();
  return response;
});

export const createMovie = createAsyncThunk('movies/create', async (movieData) => {
  const response = await addMovie(movieData);
  return response;
});

// New async thunk to update movie showtimes
export const modifyMovieShowtimes = createAsyncThunk('movies/modifyShowtimes', async ({ id, showtimes }) => {
  const response = await updateMovieShowtimes(id, showtimes);
  return { id, showtimes };
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = Object.keys(action.payload).map((key) => ({
          id: key,
          ...action.payload[key],
        }));
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.list.push({ id: action.meta.requestId, ...action.payload });
      })
      // Handle the update of movie showtimes
      .addCase(modifyMovieShowtimes.fulfilled, (state, action) => {
        const { id, showtimes } = action.payload;
        const movieIndex = state.list.findIndex(movie => movie.id === id);
        if (movieIndex !== -1) {
          state.list[movieIndex].showtimes = showtimes;
        }
      });
  },
});

export default movieSlice.reducer;
