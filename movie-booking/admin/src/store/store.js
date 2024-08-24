import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import categoryReducer from '../features/categorySlice';
import movieReducer from '../features/movieSlice';
import bookedMoviesReducer from '../features/bookedMoviesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
    movies: movieReducer,
    bookedMovies: bookedMoviesReducer,
  },
});

export default store;
