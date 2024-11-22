import React from 'react';
import '../styles/CompetitionSection.css';
import competitionImage from '../assets/comp_section_image.jpg'

const CompetitionSection = () => {
  return (
    <section className="competition-section">
      <div className="competition-content">

        <div className="image-wrapper">
          <div className="image-overlay"></div>
          <img
            src={competitionImage}
            alt="The Competition"
            className="competition-image"
          />
        </div>

        <div className="competition-text">
          <h2 className="competition-title">The Competition</h2>
          <p className="competition-description">
            The Autonomous Snowplow Competition has been taking place in Minnesota since 2010 and invites teams to autonomously clear a snowfield while avoiding obstacles and then navigating back to the starting garage. The competition encourages teams to use state-of-the-art sensors and navigation technology to accurately and safely clear a snow path.
          </p>
          <a 
            className="read-more-btn" 
            href="/team" 
            rel="noopener noreferrer"
          >
            Read More <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CompetitionSection;
