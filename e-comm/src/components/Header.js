import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import { useCart } from '../CartContext';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useCart();

  const handleCartClick = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const cartItemCount = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">The Generics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ fontSize: '1.2rem' }}>
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link> 
              <Nav.Link as={NavLink} to="/login">LOGIN</Nav.Link> 
              <Nav.Link onClick={handleCartClick}>
                <FaShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <Badge pill bg="danger" className="ml-1">
                    {cartItemCount}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleCloseCart} />
    </>
  );
};

export default Header;
