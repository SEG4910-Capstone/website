import React from "react";
import { Row, Col } from "react-bootstrap";
import MechanicalImg from '../assets/blurry_shot.jpg'


const TeamDivision = ({ title, description, bgColor, txtColor, highlightColor, image, reverse }) => {
  return (
    <div className="team-division" style={{ backgroundColor: bgColor }}>
      <Row className={`align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
        <Col md={6} className="text-section">
          <h2 style={{ color: txtColor }}>
            {title} <span style={{ width: "100%", backgroundColor: highlightColor}}></span>
          </h2>
          <p style={{ color: txtColor }}>{description}</p>
        </Col>
        <Col md={6}>
          <img src={image}  alt={`${title}`} className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default TeamDivision;
