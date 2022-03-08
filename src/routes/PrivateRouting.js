import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error";
import Layout from "../layout";
import Concurso from "../page/Concurso";
const Routing = (props) => {
  const { setRefreshcheckLogin, user } = props;
  return (
    <BrowserRouter>
      <Layout setRefreshcheckLogin={setRefreshcheckLogin} user={user}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/concurso/:urlConc" element={<Concurso />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
