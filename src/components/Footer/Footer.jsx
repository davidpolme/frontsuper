import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => (


  <footer >

  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Brand href="/home">
          <h2>SuperVoices</h2>
        </Navbar.Brand>
      </Navbar.Collapse>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          <a href="https://uniandes.edu.co" target="blank">
            Universidad de Los Andes
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Grupo 12:
          <Col>
            <Row>
              <Link to="/">David Polanía</Link>
            </Row>
            <Row>
              <Link to="/">Fernando Páez</Link>
            </Row>
            <Row>
              <Link to="/">Alejandro Medina</Link>
            </Row>
          </Col>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </footer>
);

export default Footer;
