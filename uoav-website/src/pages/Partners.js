// src/pages/Partners.js
import React from 'react';
import PartnerCard from '../components/PartnerCard';
import { partners } from '../constants/Partners';
import { Button } from 'react-bootstrap';
import '../styles/Partners.css';

const Partners = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <section className="partners-header text-center py-5">
        <h1 className="section-title">Our Partners</h1>
        <p className="section-subtitle">
          Collaborating with industry leaders and innovators to drive progress and achieve shared goals.
          <br></br>
          Together, we’re shaping a future of possibilities through partnership and innovation.
        </p>
        <Button
          variant="info"
          onClick={() => scrollToSection("cta-section")}
          className="btn-custom mt-3"
        >
          Partner with Us
        </Button>
      </section>

      <section className="partners-list container py-5">
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            logoSrc={partner.logoSrc}
            title={partner.title}
            description={partner.description}
            link={partner.link}
          />
        ))}
      </section>

      <section id="cta-section" className="cta-section text-center py-5">
        <h2 className="cta-title">Interested in Becoming a Partner?</h2>
        <p className="cta-subtitle">
          UOAV team is always looking for new industry partners to work with.
          Through our team, students are given opportunities to work in a variety of industries using cutting edge technology.
        </p>
        <Button
          variant="info"
          className="btn-custom2 mt-3"
          href="link-to-sponsorship-package"
        >
          Download Sponsorship Package
        </Button>
      </section>
    </div>
  );
};

export default Partners;
