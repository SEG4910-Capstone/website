import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col className="hero-section-text text-center">
            <h1>Our Team</h1>
            <p>
            We are made up of talented uOttawa students collaborating to design, build, and innovate. With four specialized divisions, we’re dedicated to finding the perfect fit for your skills and passion. Join us and help shape the future of autonomous robotics in a friendly, professional environment.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
