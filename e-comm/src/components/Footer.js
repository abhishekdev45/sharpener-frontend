import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">The Generics</Col>
        </Row>
        <Row>
          <Col className="text-center">
            <FaFacebook className="mx-2" />
            <FaTwitter className="mx-2" />
            <FaInstagram className="mx-2" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
