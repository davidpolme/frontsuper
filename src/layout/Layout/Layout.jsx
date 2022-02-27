import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  const { setRefreshcheckLogin, className, children } = props;
  return (
    <Container fluid className={`p-0 layout ${className}`}>
      <Header setRefreshcheckLogin={setRefreshcheckLogin} />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
