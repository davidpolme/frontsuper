import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "../page/SignInSignUp";
import Error from "../page/Error";
import Layout from "../layout";
import Concurso from "../page/Concurso";
const Routing = (props) => {
  const { setRefreshcheckLogin, user } = props;
  return (
    <BrowserRouter>
      <Layout setRefreshcheckLogin={setRefreshcheckLogin} user={user}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <SignInSignUp setRefreshcheckLogin={setRefreshcheckLogin} />
            }
          />
          <Route path="/concurso/:urlConc" element={<Concurso />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
