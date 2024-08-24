import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_FIREBASE_DB_URL;

export const addCategory = async (categoryData) => {
  const url = `${API_BASE_URL}/categories.json`;
  const response = await axios.post(url, categoryData);
  return response.data;
};

export const getCategories = async () => {
  const url = `${API_BASE_URL}/categories.json`;
  const response = await axios.get(url);
  return response.data;
};
