import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import products from './data/products.json';

const App = () => {
  const albums = products.filter(product => product.title.startsWith('Album'));
  const merch = products.filter(product => !product.title.startsWith('Album'));

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h1 className="text-center bg-secondary text-white py-3">The Generics</h1>
        <h2 className="mt-5">Music</h2>
        <Row>
          {albums.map(album => (
            <Col key={album.id}>
              <ProductCard product={album} />
            </Col>
          ))}
        </Row>
        <h2 className="mt-5">Merch</h2>
        <Row>
          {merch.map(item => (
            <Col key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
