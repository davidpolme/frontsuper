import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreatePostulacion from "../../components/CreatePostulacionForm";
import BasicModal from "../../components/Modal/BasicModal";

export default function DetallesConcurso(props) {
  const { urlConc } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
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
      <BasicModal show={showModal} setShowModal={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}
