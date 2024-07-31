import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const NavBar = ({ handleShowCart }) => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Order Tshirt</Navbar.Brand>
        <Button variant="outline-light" onClick={handleShowCart}>
          Cart ({totalItems})
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
