import React from "react";
import { Modal, Button, ListGroup, Image, Row, Col } from "react-bootstrap";
import { useCart } from "../CartContext";

const Cart = ({ show, handleClose }) => {
  const { state, removeFromCart } = useCart();
  const cartItems = state.cartItems;

  const handlePurchase = () => {
    alert("Purchase successful!");
    // Add further purchase logic here
  };
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
                  <Image src={item.image} alt={item.title} fluid rounded />
                </Col>
                <Col md={6}>
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </Col>
                <Col md={4} className="text-right">
                  <Button variant="danger" onClick={() => removeFromCart(index)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h5 className="mt-4">Total Amount: ${totalAmount}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handlePurchase}>
          Purchase
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
