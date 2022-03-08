import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function BasicCard(props) {
  const { imgSrc, cardTitle, cardConcUrl } = props;
  return (
    <Card className="card" style={{ width: "18rem" }} key="{key}">
      {/* <Card.Img variant="top" src={imgSrc} /> */}
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/random?sig=123"
      />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        {/* <Card.Title>holis</Card.Title> */}
        <Card.Text>URL: {cardConcUrl}</Card.Text>
        {/* <Card.Text>lorem ipsum dolor sit amet, consectetur</Card.Text> */}
        <Link
          to={cardConcUrl.replace("http://127.0.0.1:5000", "")}
          variant="primary"
        >
          Ver concurso
        </Link>
      </Card.Body>
    </Card>
  );
}
