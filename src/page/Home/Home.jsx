import React, { useState, useEffect } from "react";
import "./Home.scss";
// import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";
import BasicModal from "../../components/Modal/BasicModal";
import CreateConcurso from "../../components/CreateConcursoForm";
import { Button } from "react-bootstrap";

import {getUserIDApi} from "../../api/auth";
import { getConcursoByIDApi } from "../../api/concursos";
import { toast } from "react-toastify";

export default function Home() {
  const [responseItems, setResponseItems] = useState(null);
  const [existData, setExistData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  useEffect(() => {
    getConcursoByIDApi(getUserIDApi())
      .then((response) => {
        setResponseItems(response.concursos);
        setExistData(true);
        if (response.concursos.length <= 0) {
          toast.info("Aun no hay ningun Concurso");
          setExistData(false);
        }
      })
      .catch((err) => {
        toast.error("Error al cargar los datos: ");
        setExistData(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="home">
        <h1>Concursos</h1>
        <Button
          variant="primary"
          onClick={() =>
            openModal(<CreateConcurso setShowModal={setShowModal} />)
          }
        >
          Crear nuevo Concurso
        </Button>

        {existData ? (
          <Pagination items={responseItems} />
        ) : (
          <h2>Crea tu primer concurso</h2>
        )}
      </div>
      <BasicModal show={showModal} setShowModal={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}
