import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

export const loginAdmin = async (email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  return response.data;
};
