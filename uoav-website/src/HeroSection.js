import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          uOttawa <span className="highlight">Autonomous Vehicles</span>
        </h1>
        <p className="hero-subtitle">
          Leverage advanced sensors, AI algorithms, and precise control systems to create autonomous vehicles.
        </p>
        <button className="hero-button">Join the Team →</button>
      </div>
      <img src="path-to-hero-image.png" alt="uOAV Logo" className="hero-image" />
    </div>
  );
};

export default HeroSection;
