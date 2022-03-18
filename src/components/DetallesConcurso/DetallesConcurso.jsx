import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CreatePostulacion from "../../components/CreatePostulacionForm";
import BasicModal from "../../components/Modal/BasicModal";
import BasicTable from "../BasicTable/BasicTable";
import { getPostulacionesApi } from "../../api/postulaciones";
import { toast } from "react-toastify";

export default function DetallesConcurso(props) {
  const { urlConc } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const [responseItems, setResponseItems] = useState(null);
  const [existData, setExistData] = useState(false);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  useEffect(() => {
    getPostulacionesApi()
      .then((response) => {
        setResponseItems(response);
        setExistData(true);
        
        if (response.length <= 0) {
          toast.info("Aun no hay ninguna Postulación");
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
      <h1>{urlConc}</h1>
      <h2>Postulaciones Actuales</h2>
      <Button
        variant="primary"
        onClick={() =>
          openModal(<CreatePostulacion setShowModal={setShowModal} />)
        }
      >
        Crear Nueva Postulación
      </Button>
      {existData ? <BasicTable/> : <h2>Aún no hay postulaciones</h2>}

      <BasicModal show={showModal} setShowModal={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}
