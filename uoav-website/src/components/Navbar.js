import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <div className="navbar-left">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          uOAV
        </Navbar.Brand>
      </div>
    
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="navbar-right">
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/partners" className="nav-link">Partners</Nav.Link>
            <Nav.Link as={Link} to="/docs" className="nav-link">Docs</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/team" className="nav-link">Team</Nav.Link>
          </Nav>
          <button className="join-btn">Join the Team</button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;






