import React, { useState } from "react";
import { Row } from "react-bootstrap";
import BasicCard from "../../components/BasicCard";
import "./Cards.scss";

export default function Cards({ cards }) {

  return (
    <Row className="cards">
      {cards.map((card) => {
        return (
          <BasicCard
            className="card"
            imgSrc={card.urlBanner}
            cardTitle={card.nombre}
            cardConcUrl={card.url}
            key={card.id.toString()}
          />
        );
      })}
    </Row>
  );
}
