import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error";
import Layout from "../layout";

const Routing = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Routing;
