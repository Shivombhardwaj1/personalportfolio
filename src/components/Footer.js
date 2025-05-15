import React from 'react';
import './Footer.css';
import logo from './images/logo.png'; // Replace with your actual logo path

const Footer = () => (
  <footer className="simple-footer">
    <p>Made by @Shivombhardwaj</p>
    <img src={logo} alt="Shiv Om Bhardwaj Logo" className="footer-logo" />
  </footer>
);

export default Footer;
