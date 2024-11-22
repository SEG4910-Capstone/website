import React from 'react';
import '../styles/WeAreSectionBottom.css';

const WeAreSectionBottom = () => {
  return (
    <section className="weare-section-bottom">
      <div className="weare-title">
        <h2>
          We are <span className="highlight">uOAV</span>
        </h2>
      </div>
      <div className="video-container">
        <iframe
          className="youtube-video"
          width="800"
          height="450"
          src="https://www.youtube.com/embed/VAFsyuuwNtk?si=PJ8ulYAjAKVUp-v4" 
          title="Autonomous Snowplow"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default WeAreSectionBottom;

