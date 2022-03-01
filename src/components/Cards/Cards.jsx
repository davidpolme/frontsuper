import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import BasicCard from "../../components/BasicCard";
import "./Cards.scss";
import { Link } from "react-router-dom";
import BasicModal from "../../components/Modal/BasicModal";
import CreateConcurso from "../CreateConcursoForm";

export default function Cards({ cards }) {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() =>
          openModal(<CreateConcurso setShowModal={setShowModal} />)
        }
      >
        Crear nuevo Concurso
      </Button>

        <Row className="cards">
          {cards.map((card) => {
            return (
              <BasicCard
                className="card"
                imgSrc={card.imgSrc}
                cardTitle={card.Title}
                cardText={card.Text}
                key={card.id.toString()}
              />
            );
          })}
        </Row>
      <BasicModal show={showModal} setShowModal={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}
