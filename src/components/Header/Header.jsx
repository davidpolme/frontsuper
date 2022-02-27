import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { logOutApi } from "../../api/auth";
const Header = (props) => {
  const { setRefreshcheckLogin } = props;

  const logout = () => {
    logOutApi();
    setRefreshcheckLogin(true);
  };
  return (
    <header className="header">
      <Container fluid className="p-0">
        <Navbar className="p-3" bg="primary" variant="dark">
          <Navbar.Brand href="/home">
            <h2>Super Voices</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/profile">Perfíl</Nav.Link>
            <Nav.Link to="" onClick={logout}>
              Cerrar Sesión
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
