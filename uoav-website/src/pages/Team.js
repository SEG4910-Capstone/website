import React from 'react';
import '../styles/Team.css';
import electrical from '../electrical.jpg';
import mechanical from '../mechanical.jpg';

const Team = () => {
  return (
    <div className="team-page">
    
        <div className="overlay">
          <section className="partners-header text-center py-5">
        <h1 className="section-title">Our Team</h1>
      </section>
        </div>


      <section className="division mechanical">
        <div className="text">
          <h2>Mechanical</h2>
          <p>By joining this division, you will gain hands-on experience in the rapidly growing field of autonomous robotics while contributing your skills to the creation of sophisticated, self-driving machines that will revolutionize the future of transportation and robotics.</p>
        </div>
        <div className="media-placeholder">
          <img src={mechanical} alt="Mechanical Team" />
        </div>
      </section>
      <section className="division electrical">
        <div className="media-placeholder">
          <img src={electrical} alt="Electrical Team" />
        </div>
        <div className="text">
          <h2>Electrical</h2>
          <p>On the Electrical team, you will be responsible for designing, implementing, and optimizing the electrical systems and circuitry that empower our advanced robotic creations. You will collaborate to devise solutions for challenges such as power management, sensor integration, and communication between various subsystems.</p>
        </div>
      </section>
      <section className="division software">
        <div className="text">
          <h2>Software</h2>
          <p>By joining this division, you will gain hands-on experience in the rapidly growing field of autonomous robotics while contributing your skills to the creation of sophisticated, self-driving machines that will revolutionize the future of transportation and robotics.</p>
        </div>
        <div className="media-placeholder"></div>
      </section>
      <section className="division marketing">
        <div className="media-placeholder"></div>
        <div className="text">
          <h2>Marketing</h2>
          <p>In the Marketing division, you will be responsible for building a strong online presence for the team and promoting projects. Your contributions will ensure the team’s efforts are well-documented and showcased effectively to stakeholders, sponsors, and the public.</p>
        </div>
      </section>
      <footer className="cta-footer">
        <h2>Thinking of Joining?</h2>
        <button className="cta-button">Join the Team →</button>
      </footer>
    </div>
  );
};

export default Team;
