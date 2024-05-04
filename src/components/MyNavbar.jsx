import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import TruckIcon from './TruckIcon';

const MyNavbar = () => {
  return (
    <Router>
      <NavbarWithLocation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/o-nama" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const NavbarWithLocation = () => {
  const location = useLocation();

  return (
      <Navbar expand="lg" variant="dark" className="px-4 shadow mb-3 bg-custom">
        <Navbar.Brand href="#home" className="fw-bolder fs-5 text-dark">
          Trans<u>porter<i>2022</i><TruckIcon /></u>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLinkWithActiveCheck to="/" currentLocation={location}>Početna</NavLinkWithActiveCheck>
            <NavLinkWithActiveCheck to="/o-nama" currentLocation={location}>O nama</NavLinkWithActiveCheck>
            <NavLinkWithActiveCheck to="/kontakt" currentLocation={location}>Kontakt</NavLinkWithActiveCheck>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

const NavLinkWithActiveCheck = ({ to, currentLocation, children }) => {
  const isActive = currentLocation.pathname === to;
  const className = isActive ? 'nav-link fs-5 px-4 fw-bolder text-white link-aktivan-da' : 'nav-link fs-5 fw-bolder text-white link-aktivan-ne';

  return (
    <Link to={to} className={className}>{children}</Link>
  );
};

export default MyNavbar;
