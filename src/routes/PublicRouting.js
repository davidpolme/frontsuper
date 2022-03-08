import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "../page/public/SignInSignUp";
import Error from "../page/Error";
import Layout from "../layout";
import Concurso from "../page/Concurso";
import Landpage from "../page/public/Landpage";
const Routing = (props) => {
  const { setRefreshcheckLogin, user } = props;
  return (
    <BrowserRouter>
      <Layout setRefreshcheckLogin={setRefreshcheckLogin} user={user}>
        <Routes>
          <Route exact path="/" element={<Landpage />} />
          <Route exact path="/login" element={<SignInSignUp setRefreshcheckLogin={setRefreshcheckLogin} />}/>
          <Route path="/concurso/:urlConc" element={<Concurso />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
