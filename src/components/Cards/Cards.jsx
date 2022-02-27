import React from "react";
import { Container, Row } from "react-bootstrap";
import BasicCard from "../../components/BasicCard";
import './Cards.scss'

export default function Cards({ cards }) {
  console.log({"InCardsCards":cards})
  return (
    <Container>
      <Row>
        {cards.map((card) => {
          return (

            <BasicCard className="card"
              imgSrc={card.imgSrc}
              cardTitle={card.Title}
              cardText={card.Text}
              key={card.id.toString()}
              />
          );
        })}
      </Row>
    </Container>
  );
}
