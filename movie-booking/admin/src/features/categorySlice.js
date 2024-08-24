import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addCategory, getCategories } from '../services/categoryService';
import { toast } from 'react-toastify';

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await getCategories();
  return response;
});

export const createCategory = createAsyncThunk('categories/create', async (categoryData) => {
  const response = await addCategory(categoryData);
  toast.success("Category added successfully!");
  return response;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = Object.keys(action.payload).map((key) => ({
          id: key,
          ...action.payload[key],
        }));
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.list.push({ id: action.meta.requestId, ...action.payload });
      });
  },
});

export default categorySlice.reducer;
