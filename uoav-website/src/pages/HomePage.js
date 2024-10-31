import React from 'react';
import HeroSection from '../components/HeroSection';
import WeAreSectionBottom from '../components/WeAreSectionBottom';
import CompetitionSection from '../components/CompetitionSection';
import Footer from '../components/Footer';

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
