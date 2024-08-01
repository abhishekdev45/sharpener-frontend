import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="d-flex align-items-center justify-content-center text-center text-white" 
        style={{ 
          height: '100vh', 
          backgroundImage: `url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNTktMDQxYy1rdjd2N3duYi5qcGc.jpg)`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          color: '#333' // Dark text color
        }}>
        <div>
          <h1 className="display-2 font-weight-bold mb-3 text-dark">The Generics</h1>
          <p className="lead mb-4 text-dark">Get our latest album now!</p>
          <Button variant="primary" size="lg" as={NavLink} to="/store">Shop Now</Button>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-5 bg-light">
        <Container className="my-5">
          <h2 className="text-center mb-4 font-weight-bold">Tours</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Venue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/2024</td>
                <td>New York, NY</td>
                <td>Madison Square Garden</td>
                <td><Button variant="success">Book Tickets</Button></td>
              </tr>
              <tr>
                <td>02/01/2024</td>
                <td>Los Angeles, CA</td>
                <td>Staples Center</td>
                <td><Button variant="success">Book Tickets</Button></td>
              </tr>
              <tr>
                <td>03/01/2024</td>
                <td>Chicago, IL</td>
                <td>United Center</td>
                <td><Button variant="success">Book Tickets</Button></td>
              </tr>
              <tr>
                <td>04/01/2024</td>
                <td>Houston, TX</td>
                <td>Toyota Center</td>
                <td><Button variant="success">Book Tickets</Button></td>
              </tr>
              <tr>
                <td>05/01/2024</td>
                <td>Miami, FL</td>
                <td>American Airlines Arena</td>
                <td><Button variant="success">Book Tickets</Button></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>
    </div>
  );
};

export default Home;
