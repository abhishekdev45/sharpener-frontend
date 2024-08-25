import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categorySlice';
import movieReducer from '../features/movieSlice';
import bookingReducer from '../features/bookingSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    movies: movieReducer,
    bookings: bookingReducer,
  },
});

export default store;