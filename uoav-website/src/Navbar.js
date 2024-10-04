import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <div className="navbar-left">  
      <Navbar.Brand href="#home" className="navbar-brand-custom">
        uOAV
      </Navbar.Brand>
      </div>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="navbar-right"> 
          <Nav className="nav-links">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <Nav.Link href="#docs">Docs</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <button className="join-btn">Join the Team</button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;





