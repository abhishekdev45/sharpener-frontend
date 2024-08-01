import React from 'react';
import { Container } from 'react-bootstrap';
import aboutImage from '../assets/about-image.png'; // Ensure you have an image in the assets folder

const About = () => {
  return (
    <Container className="my-5">
      <div style={{ backgroundColor: '#f8f9fa', padding: '50px', textAlign: 'center' }}>
        <h1 style={{ color: '#343a40' }}>The Generics</h1>
      </div>
      <h2 className="my-4">About Us</h2>
      <div className="text-center mb-4">
        <img src={aboutImage} alt="About Us" className="rounded-circle" style={{ width: '200px', height: '200px' }} />
      </div>
      <p>
        Welcome to The Generics, your number one source for all things [product, ie: music albums, merchandise]. 
        We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.]
      </p>
      <p>
        Founded in [year] by [founder name], The Generics has come a long way from its beginnings in [starting location]. 
        When [founder name] first started out, [his/her/their] passion for [brand message - ie: "eco-friendly cleaning products"] drove them to [action, ie: do tons of research, quit her day job], 
        so that The Generics can offer you [competitive differentiator - ie: "the world's most advanced toothbrush"]. 
        We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled that we're able to turn our passion into [my/our] own website.
      </p>
      <p>
        [founder name] hope you enjoy [my/our] products as much as [I/we] enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact [me/us].
      </p>
      <p>Sincerely,</p>
      <p>[founder name], Founder</p>
    </Container>
  );
};

export default About;
