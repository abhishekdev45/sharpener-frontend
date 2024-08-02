import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './CartContext';
import AuthContextProvider from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
