// src/pages/Partners.js
import React from 'react';
import PartnerCard from '../components/PartnerCard';
import { partners } from '../constants/Partners';
import '../styles/Partners.css';

const Partners = () => {
  return (
    <div className="partners-page">
      <header className="partners-header text-center py-5">
        <h1 className="section-title">Our Partners</h1>
        <a 
          className="btn-partner cta-btn mt-4" 
          href="link-to-sponsorship-package"
        >
          Partner with Us
        </a>
      </header>

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

      <section className="cta-section text-center py-5">
        <h2 className="cta-title">Interested in Becoming a Partner?</h2>
        <p className="cta-subtitle text-center">
          UOAV team is always looking for new industry partners to work with.
          Through our team, students are given opportunities to work in a variety of industries using cutting edge technology.
        </p>
        <a 
          className="btn-custom cta-btn mt-3" 
          href="link-to-sponsorship-package"
        >
          Download Sponsorship Package
        </a>
      </section>
    </div>
  );
};

export default Partners;
