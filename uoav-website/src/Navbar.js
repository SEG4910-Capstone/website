import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Navbar.Brand href="#home">
        <img src="path-to-your-logo.png" alt="uOAV Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#partners">Partners</Nav.Link>
          <Nav.Link href="#docs">Docs</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Button variant="outline-light" className="navbar-btn">
          Join the Team
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
