import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">uOAV</h2>
      <p>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra2S8RqI5r-tPjemcEE7-UlZURUhKM0FTWjI1MFFQMlEyTE84U0daOEIxUCQlQCN0PWcu&origin=QRCode" target="_blank" rel="noopener noreferrer" className="footer-link">
          Join the Team
        </a> 
        | 
        <a href="#" className="footer-link">
          Become a Partner
        </a>
      </p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/uottawautonomous/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UC5UHVxBfFcMO_jw4yqCOOLg?themeRefresh=1" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/company/uottawa-autonomous-vehicle-team" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
      <p>© 2021-2024 uOAV | Powered by uOAV</p>
    </footer>
  );
};

export default Footer;
