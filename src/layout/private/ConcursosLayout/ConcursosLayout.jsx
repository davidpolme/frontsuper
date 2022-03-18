import React from 'react'
import { Container, Button } from "react-bootstrap";
import './ConcursosLayout.scss';

export default function ConcursosLayout({children}) {
  return (
    <Container fluid className={`concursos-layout`}>
      <h1>Panel de administrador</h1>
      <div className="buttons">
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </div>
      {children}
    </Container>
  );
}

