import React from "react";
import "./Header.scss";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <header className="header">
    <Container fluid className="p-0">
      <Navbar className="p-3" bg="primary" variant="dark">
        <Navbar.Brand href="/home">
          <h2>Super Voices</h2>
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Perfíl</Nav.Link>
            <Nav.Link href="/logout">Cerrar Sesión</Nav.Link>
          </Nav>
      </Navbar>
    </Container>
  </header>
);

export default Header;
