import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header className="header">
      <Container fluid className="p-0">
        <Navbar className="p-3" variant="dark">
          <Navbar.Brand href="/">
            <h2>Super Voices</h2>
          </Navbar.Brand>
          <Nav>
            <Link className="navLink" to="/login">
              Iniciar Sesion
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
