import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarComponent = () => {

  const [navbarState, setNavbarState] = useState(true);
  const handleChangeNavbar = (value) => {
    setNavbarState(value);
  }

  return (
    <Navbar expand="lg" className="mb-3 d-flex justify-content-between navbar" sticky="top" variant='dark'>
      <Container fluid>
        <Navbar.Brand>
          <NavLink className="nav-link" to="/">
            <Image src="images/logo-lina-quesada.png" alt="logo-lina-quesada" width="61" height="43" fluid />
            <Image src="images/navbar-brand.png" alt="logo2-lina-quesada" width="147" height="16" fluid />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navbarState && <a href="#inicio" className='nav-link'>Intro</a>}
              {navbarState && <a href="#about" className='nav-link'>About</a>}
              {navbarState && <a href="#skills" className='nav-link'>Skills</a>}
              {!navbarState && <NavLink className="nav-link" to="/" style={{ color: '#efb603' }} onClick={() => handleChangeNavbar(!navbarState)}>Inicio</NavLink>}
              {navbarState && <NavLink className="nav-link" to="/courses" onClick={() => handleChangeNavbar(!navbarState)}>Cursos</NavLink>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;