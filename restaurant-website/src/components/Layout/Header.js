// src/components/Header.js
import React from 'react';
import './Header.css';
import headerImage from '../../assets/meals.png';

const Header = () => {
  return (
    <header className="header">
      <img src={headerImage} alt="Header Background" className="header-image" />
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="header-title">ReactMeals</h1>
        <button className="cart-button">
          <span className="cart-icon">🛒</span> Your Cart <span className="cart-badge">0</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
