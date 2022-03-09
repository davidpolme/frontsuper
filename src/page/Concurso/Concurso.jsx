import React from "react";
import { useParams } from "react-router-dom";
import { isUserLoggedInApi } from "../../api/auth";
import ConcursosLayout from "../../layout/private/ConcursosLayout";
import DetallesConcurso from "../../components/DetallesConcurso";

import "./Concurso.scss";

export default function Concurso() {
  let { urlConc } = useParams();

  return (
    <div className="concurso-container">
      {isUserLoggedInApi() ? (
        <ConcursosLayout>
          <DetallesConcurso urlConc={urlConc} />
        </ConcursosLayout>
      ) : (
          <DetallesConcurso urlConc={urlConc} />
      )}
    </div>
  );
}
