import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage'; 
import Team from './pages/Team'; 
import Partners from './pages/Partners'; 
import ContactUs from './pages/ContactUs';
import './styles/App.css';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/team" element={<Team />} /> 
          <Route path="/partners" element={<Partners />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
        </Routes>
        <Footer/>
      </div>
  
  );
}

export default App;



