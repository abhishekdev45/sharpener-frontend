import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product, size) => {
    const existingProduct = cart.find((item) => item.name === product.name && item.size === size);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
    setProducts(
      products.map((item) =>
        item.name === product.name
          ? { ...item, quantity: { ...item.quantity, [size]: item.quantity[size] - 1 } }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, products, addProduct, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
