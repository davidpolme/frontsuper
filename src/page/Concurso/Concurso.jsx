import React from "react";
import { useParams } from "react-router-dom";

import "./Concurso.scss";

export default function Concurso() {
  let { urlConc } = useParams();
  return (
    <div className="concurso-container">
      <h1>{urlConc}</h1>
    </div>
  );  
}
