

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../CartContext";
import "./Custom.css"; 

const ProductPage = () => {
  const { dispatch } = useCart();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => {
    const productData = products.find((p) => p.id === parseInt(productId));
    setProduct(productData);
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <h5>Description</h5>
          <p>{product.description}</p>

          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
          <h5 className="mt-4">Reviews</h5>
          <ListGroup>
            {product.reviews.map((review, index) => (
              <ListGroup.Item key={index}>
                <strong>{review.user}</strong>: {review.comment}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
