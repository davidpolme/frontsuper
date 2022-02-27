import React from 'react'
import { Card, Button } from "react-bootstrap";
import './Card.scss';

export default function BasicCard(props) {
  const { imgSrc, cardTitle, cardText, index } = props; 
  return (
    <Card style={{ width: "18rem" }} key="{key}">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button variant="primary">Ver evento</Button>
      </Card.Body>
    </Card>
  );
}
