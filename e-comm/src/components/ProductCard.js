// src/components/ProductCard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    
    <Card style={{ width: '18rem' }} className="m-3">
        <NavLink to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.images[0]} />
        </NavLink>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
       
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
    
  );
};

export default ProductCard;
