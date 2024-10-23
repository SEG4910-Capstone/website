import React from 'react';
import HeroSection from './HeroSection';
import WeAreSectionBottom from './WeAreSectionBottom';
import CompetitionSection from './CompetitionSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WeAreSectionBottom />
      <CompetitionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
