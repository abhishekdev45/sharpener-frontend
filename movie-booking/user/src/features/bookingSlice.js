import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_FIREBASE_DB_URL;

export const createBooking = createAsyncThunk('bookings/createBooking', async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/bookings.json`, bookingData);
  return response.data;
});

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookingSlice.reducer;
