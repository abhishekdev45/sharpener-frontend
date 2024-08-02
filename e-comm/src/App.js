// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import ProductPage from './pages/ProductPage'; 
import LoginPage from './pages/Login';
import AuthContextProvider from './AuthContext';

const App = () => {
  return (

    <AuthContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductPage />} /> {/* Add route for product details */}
      </Routes>
      <Footer />
    </Router>
    </AuthContextProvider>
  );
};

export default App;
