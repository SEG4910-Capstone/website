import React from 'react';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import WeAreSectionBottom from './components/WeAreSectionBottom';
import CompetitionSection from './components/CompetitionSection';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <WeAreSectionBottom/>
      <CompetitionSection />
      <Footer />
    </div>
  );
}

export default App;


