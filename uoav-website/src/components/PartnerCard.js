import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Partners.css';

const PartnerCard = ({ logoSrc, title, description, link }) => {
  return (
    <div className="partner-card d-flex flex-column flex-lg-row align-items-center my-4">
      <Row>
        <Col>
          <div className="partner-logo-container flex-shrink-0 me-lg-4 mb-3 mb-lg-0">
            <img src={logoSrc} alt={`${title} logo`} className="partner-logo" />
          </div>
        </Col>
        <Col>
          <div className="partner-info">
            <h3 className="partner-title mb-3">{title}</h3>
            <p className="partner-description">{description}</p>
            <div className="learn-more-container">
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn-custom learn-more-btn mt-2">
                Learn More →
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PartnerCard;
