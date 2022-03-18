import React, { useState } from "react";
// import { values, size } from "lodash";
import { toast } from "react-toastify";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
// import { API_HOST } from "../../utils/constants";
// import DatePicker from "react-datepicker";
import { uploadAudio } from "../../api/fileManagement";
import { createPostulacionApi } from "../../api/postulaciones";

import {v4 as uuidv4} from "uuid";

import "./CreatePostulacion.scss";

export default function CreateConcurso(props) {
  const { setShowModal, urlConc } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [createConcLoading, setCreateConcLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    setCreateConcLoading(true);

    let filenameau = e.target[3].files[0].name;

    console.log({ Name: filenameau.split(/(\\|\/)/g).pop() });
    console.log({ Type: e.target[3].files[0].type });

    uploadAudio(e)
      .then((response) => {
        console.log({ "Respuesta al crear el archivo: ": response });
      })
      .then(() => {
        let nuevaPostulacion = {
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          observaciones: formData.observaciones,
          nombreArchivo: filenameau.split(/(\\|\/)/g).pop(),
          extencionArchivo: e.target[3].files[0].type,
          // urlArchivo: "",
          idConcurso: urlConc,
          // fechaPublicacion: "",
        };

        createPostulacionApi(nuevaPostulacion)
          .then((res) => {
            toast.success("Postulación creada");
            setCreateConcLoading(false);
            setShowModal(false);

            //TODO: Esto hay que quitarlo y refrescar el componente usando estados
            // window.location.reload(false);
          })
          .catch((error) => {
            toast.error("Hubo un error al crear la postulación");
            //TODO:Eliminar imagen
            console.log({ "Error Cargar Postulacion": error });
            setCreateConcLoading(false);
          });
      })
      .catch(function (error) {
        toast.error("Hubo un error al cargar el audio");
        console.log({ "Error el Audio": error });
        setCreateConcLoading(false);
      });
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
