import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await fetch('https://movie-a7a01-default-rtdb.firebaseio.com/user.json', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSuccess('Your message has been sent!');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100">
        <Col xs={12} md={8} lg={6} xl={4} className="mx-auto">
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    size="lg"
                  />
                </Form.Group>

                {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
                {success && <Alert variant="success" className="mb-4">{success}</Alert>}

                <Button variant="primary" type="submit" className="w-100 py-2" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
