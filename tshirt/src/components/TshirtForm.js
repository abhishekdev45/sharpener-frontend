import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const TshirtForm = () => {
  const { addProduct } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    quantity: { Large: 0, Medium: 0, Small: 0 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Large' || name === 'Medium' || name === 'Small') {
      setForm((prev) => ({
        ...prev,
        quantity: { ...prev.quantity, [name]: parseInt(value) },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(form);
    setForm({ name: '', description: '', price: '', quantity: { Large: 0, Medium: 0, Small: 0 } });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="form-group">
        <Form.Label>Tshirt Name</Form.Label>
        <Form.Control name="name" value={form.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" value={form.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" value={form.price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Quantity (Large)</Form.Label>
        <Form.Control name="Large" value={form.quantity.Large} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Quantity (Medium)</Form.Label>
        <Form.Control name="Medium" value={form.quantity.Medium} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Quantity (Small)</Form.Label>
        <Form.Control name="Small" value={form.quantity.Small} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Add Product</Button>
    </Form>
  );
};

export default TshirtForm;
