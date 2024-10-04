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
          Leverage advanced sensors, AI algorithms, and precise control systems to create autonomous vehicles in a high-paced environment.
        </p>
        <button className="hero-button">
          Join the Team <span className="hero-arrow">→</span>
        </button>
      </div>
      <div className="hero-image">
        <img src="/logo.png" alt="uOAV Logo" className="hero-logo" />
      </div>
    </div>
  );
};

export default HeroSection;

