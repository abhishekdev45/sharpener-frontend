import React, { useState } from 'react';
import NavBar from './components/Navbar';
import TshirtForm from './components/TshirtForm';
import ProductList from './components/ProductList';
import CartOverlay from './components/CartOverlay';
import { CartProvider } from './context/CartContext';
import "./App.css"

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <CartProvider>
      <NavBar handleShowCart={handleShowCart} />
      <div className="container mt-4">
        <TshirtForm />
        <ProductList />
      </div>
      <CartOverlay show={showCart} handleClose={handleCloseCart} />
    </CartProvider>
  );
}

export default App;
