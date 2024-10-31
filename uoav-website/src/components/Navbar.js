import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const pages = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Partners", href: "/partners" },
  { name: "Docs", href: "/docs" },
  { name: "Contact Us", href: "/contact" }
]

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <div className="navbar-left">
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
          uOAV
        </Navbar.Brand>
      </div>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <div className="navbar-right">
          <Nav className="nav-links">
            {pages.map((item) => (
              <Nav.Link as={NavLink} to={item.href} className="nav-link">{item.name}</Nav.Link>
            ))}
          </Nav>
          <button className="join-btn">Join the Team</button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;






