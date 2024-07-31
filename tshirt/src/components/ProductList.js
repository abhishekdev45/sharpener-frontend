import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="mb-3">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button
            className="me-2"
            disabled={product.quantity.Large <= 0}
            onClick={() => addToCart(product, 'Large')}
          >
            Buy Large ({product.quantity.Large})
          </Button>
          <Button
            className="me-2"
            disabled={product.quantity.Medium <= 0}
            onClick={() => addToCart(product, 'Medium')}
          >
            Buy Medium ({product.quantity.Medium})
          </Button>
          <Button
            disabled={product.quantity.Small <= 0}
            onClick={() => addToCart(product, 'Small')}
          >
            Buy Small ({product.quantity.Small})
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
