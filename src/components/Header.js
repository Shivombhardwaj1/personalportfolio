import React from 'react';
import './Header.css';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
          <h1>Shiv Om Bhardwaj</h1>
        </div>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
