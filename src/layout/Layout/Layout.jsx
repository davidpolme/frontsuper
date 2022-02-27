import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

const Layout = ({ className, children }) => (
  <Container className={`layout ${className}`}>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
