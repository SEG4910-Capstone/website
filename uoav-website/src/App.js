import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage'; 
import Team from './components/Team'; 
import './styles/App.css';

function App() {
  return (

      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/team" element={<Team />} /> 
        </Routes>
      </div>
  
  );
}

export default App;



