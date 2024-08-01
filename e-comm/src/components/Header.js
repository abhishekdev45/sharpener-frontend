import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">The Generics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ fontSize: '1.2rem' }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link onClick={handleCartClick}>
                <FaShoppingCart size={24} />
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
