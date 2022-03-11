import React, { useState } from "react";
// import { values, size } from "lodash";
// import { toast } from "react-toastify";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
// import { API_HOST } from "../../utils/constants";
// import DatePicker from "react-datepicker";
// import { uploadImg } from "../../api/driveFiles";
// import { createConcursoApi } from "../../api/concursos";
import "./CreatePostulacion.scss";

export default function CreateConcurso(props) {
  // const { setShowModal } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [createConcLoading, setCreateConcLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    setCreateConcLoading(true);

    let filenameau= e.target[3].files[0].name;


    console.log({ "Name": filenameau.split(/(\\|\/)/g).pop() });
    console.log({"Type":e.target[3].files[0].type})


    
  }

  return (
    <div className="crear-postulación-form">
      <h2>Nueva Postulación</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="form-group">
          <Row>
            <Col>
              <Form.Control
                placeholder="Nombres"
                type="text"
                defaultValue={formData.nombre}
                name="nombre"
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Apellidos"
                type="text"
                defaultValue={formData.apellido}
                name="apellido"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                placeholder="Correo Electrónico"
                type="email"
                defaultValue={formData.email}
                name="email"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="form-group">
          <Row>
            <Col className="inlineItems">
              <Form.Label>Cargar Audio</Form.Label>
              <Form.Control id="audioFile" type="file" accept="audio/*" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="form-group">
          <Row>
            <Col>
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="lorem ipsum dolor sit amet, consectetur adip"
                defaultValue={formData.observaciones}
                name="observaciones"
              />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          {!createConcLoading ? (
            "Crear Postulación"
          ) : (
            <Spinner animation="border" />
          )}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    nombre: "",
    apellido: "",
    email: "",
    observaciones: "",
    nombreArchivo: "",
    extencionArchivo: "",
    // urlArchivo: "",
    idConcurso: "",
    // fechaPublicacion: "",
  };
}
