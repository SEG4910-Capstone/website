import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">uOAV</h2>
      <p>Join the Team | Become a Partner</p>
      <div className="footer-icons">
        <FaInstagram className="footer-icon" />
        <FaYoutube className="footer-icon" />
        <FaLinkedin className="footer-icon" />
      </div>
      <p>© 2021-2024 uOAV | Powered by uOAV</p>
    </footer>
  );
};

export default Footer;
