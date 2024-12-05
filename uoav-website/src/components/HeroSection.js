import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          uOttawa <span>Autonomous</span> Vehicles
        </h1>
        <p className="hero-subtitle">
          Leverage advanced sensors, AI algorithms, and precise control systems to create autonomous vehicles in a high-paced environment.
        </p>
        <a 
          className="hero-button" 
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra2S8RqI5r-tPjemcEE7-UlZURUhKM0FTWjI1MFFQMlEyTE84U0daOEIxUCQlQCN0PWcu&origin=QRCode" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Join the Team →
        </a>
      </div>
      <div className="hero-image">
        <img src="/logo.png" alt="uOAV Logo" className="hero-logo" />
      </div>
    </div> 
  );
};

export default HeroSection;

