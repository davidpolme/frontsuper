import React from "react";
import PrivateHeader from "../components/Header/Private";
import PublicHeader from "../components/Header/Public";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import "./Layout.scss";

const Layout = (props) => {
  const { setRefreshcheckLogin, className, children, user } = props;
    return (
    <Container fluid className={`p-0 layout ${className}`}>
      { user ? ( <PrivateHeader setRefreshcheckLogin={setRefreshcheckLogin} />):(<PublicHeader/> )}
     
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
