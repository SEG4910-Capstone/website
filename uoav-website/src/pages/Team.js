import React from 'react';
import '../styles/Team.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TeamsHeroSection from '../components/TeamsHeroSection';
import TeamDivision from '../components/TeamDivision';
import MechanicalImg from '../assets/blurry_shot.jpg';
import ElectricalImg from '../assets/software_team.jpg';
import SoftwareImg from '../assets/software.jpg'
import MarketingImg from '../assets/marketing.jpeg'

const Team = () => {
  return (
    <>
      <div className="team-page">

        <TeamsHeroSection />

        <TeamDivision
          title="Mechanical"
          description="By joining this division, you will gain hands-on experiences in the rapidly growing field of autonomous robotics, while contributing your skills to the creation of sophisticated, self-driving machines that will revolutionize the future of transportation and robotics."
          bgColor="#0E3384"
          txtColor="#ffffff"
          highlightColor="#17E9E0"
          image={MechanicalImg}
        />
        <TeamDivision
          title="Electrical"
          description="On the Electrical team, you will be responsible for designing, implementing, and optimizing the electrical systems and circuitry that empower our advanced robotic creations. You will collaborate to devise solutions for challenges such as power management, sensor integration, and communication between various subsystems."
          bgColor="#ffffff"
          txtColor="#000000"
          highlightColor="#FF0050"
          image={ElectricalImg}
          reverse
        />
        <TeamDivision
          title="Software"
          description="By joining this division, you will gain hands-on experiences in the rapidly growing field of autonomous robotics, while contributing your skills to the creation of sophisticated, self-driving machines that will revolutionize the future of transportation and robotics."
          bgColor="#0E3384"
          txtColor="#ffffff"
          highlightColor="#17E9E0"
          image={SoftwareImg}
        />
        <TeamDivision
          title="Marketing"
          description="On the Marketing team, you will help us effectively communicate our vision and attract talent, partners, and sponsors. You'll play a vital role in creating strategies that boost our presence in the robotics community."
          bgColor="#ffffff"
          txtColor="#000000"
          highlightColor="#FF0050"
          image={MarketingImg}
          reverse
        />

        <div className="cta-footer">
          <Container>
            <Row>
              <Col style={{ textAlign: "right" }}>
                <h2>Thinking of Joining?</h2>
              </Col>
              <Col style={{ textAlign: "left" }}>
                <Button
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra2S8RqI5r-tPjemcEE7-UlZURUhKM0FTWjI1MFFQMlEyTE84U0daOEIxUCQlQCN0PWcu&origin=QRCode"
                  target="_blank"
                  className='cta-button'
                >
                  Apply →
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Team;
