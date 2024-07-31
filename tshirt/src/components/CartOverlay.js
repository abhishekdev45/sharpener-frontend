import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import ReactDOM from 'react-dom';

const CartOverlay = ({ show, handleClose }) => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!show) return null;

  return ReactDOM.createPortal(
    <Modal show={show} onHide={handleClose} style={{ zIndex: 1050 }}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              <p>
                {item.name} - {item.size} x{item.quantity} - ${item.price}
              </p>
            </div>
          ))
        )}
        <h4>Total: ${totalAmount}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => console.log('Order placed')}>
          Order
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('overlay')
  );
};

export default CartOverlay;
