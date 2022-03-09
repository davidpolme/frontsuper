import React from 'react'
import { Container } from "react-bootstrap";

export default function ConcursosLayout({children}) {
  return (
    <Container fluid className={`concursos-layout`}>
      <h1>Este tiene layout</h1>
      {children}
    </Container>
  );
}
