import React from 'react';
import './Footer.css';
import logo from './images/logo.png';

const Footer = () => (
  <footer className="simple-footer">
    <a href="https://www.linkedin.com/in/shiv-om-bhardwaj-31qwq/" style={{ color: 'white', textDecoration: 'none' }}>
      <p>Made by @Shivombhardwaj</p>
    </a>
    <img src={logo} alt="Shiv Om Bhardwaj Logo" className="footer-logo" />
  </footer>
);

export default Footer;
