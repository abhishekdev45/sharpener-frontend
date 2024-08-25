import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white p-4 mt-8 shadow-md text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-indigo-400"><FaFacebookF /></a>
        <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
        <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
      </div>
      <p className="text-sm">&copy; 2024 MovieBooking. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
