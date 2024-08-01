import React, { useState } from 'react';
import { Modal, Button, ListGroup, Image, Row, Col } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = ({ show, handleClose }) => {
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <Row>
                <Col md={2}>
                  <Image src={item.imageUrl} alt={item.title} fluid rounded />
                </Col>
                <Col md={6}>
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </Col>
                <Col md={4} className="text-right">
                  <Button variant="danger" onClick={() => removeItem(index)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
