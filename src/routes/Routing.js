import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error";
import Layout from "../layout";

const Routing = (props) => {
  const { setRefreshcheckLogin } = props;
  return (
    <BrowserRouter>
      <Layout setRefreshcheckLogin={setRefreshcheckLogin}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
