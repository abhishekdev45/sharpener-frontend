// src/pages/Store.js

import React, { Suspense, lazy } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products.json';

const ProductCard = lazy(() => import('../components/ProductCard'));

const Store = () => {
  const albums = products.filter((product) => product.title.startsWith('Album'));
  const merch = products.filter((product) => !product.title.startsWith('Album'));

  return (
    <Container className="mt-5">
      <h2 className="mt-5">Music</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          {albums.map((album) => (
            <Col key={album.id}>
              <ProductCard product={album} />
            </Col>
          ))}
        </Row>
      </Suspense>
      <h2 className="mt-5">Merch</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          {merch.map((item) => (
            <Col key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </Suspense>
    </Container>
  );
};

export default Store;
