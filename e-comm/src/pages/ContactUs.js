import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

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
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
        {error && <p className="text-danger mt-2">{error}</p>}
        {success && <p className="text-success mt-2">{success}</p>}
      </Form>
    </Container>
  );
};

export default ContactUs;
