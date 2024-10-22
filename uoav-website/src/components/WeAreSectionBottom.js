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
          //src="https://www.youtube.com/embed/dQw4w9WgXcQ" // not sure what URL we wanna put here
          title="Autonomous Snowplow"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default WeAreSectionBottom;

