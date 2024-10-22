import React from 'react';
import NavigationBar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import WeAreSectionBottom from './WeAreSectionBottom';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <WeAreSectionBottom/>
      <Footer />
    </div>
  );
}

export default App;


