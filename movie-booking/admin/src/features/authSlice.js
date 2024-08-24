import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAdmin } from '../services/authService';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await loginAdmin(credentials.email, credentials.password);
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.email;
        state.token = action.payload.idToken;
        localStorage.setItem('user', action.payload.email);
        localStorage.setItem('token', action.payload.idToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
