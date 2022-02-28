import React, { useState } from "react";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import {API_HOST} from "../../utils/constants";
import "./CreateConcurso.scss";

export default function CreateConcurso(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [signUpLoading, setSignUpLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    if (validCount !== size(formData)) {
      toast.warning("Completa todos los campos del formulario");
    }

    //createConcursoApi(formData)
  };

  return (
    <div className="crear-concurso-form">
      <h2>Crea un nuevo concurso</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="form-group">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre del concurso"
                defaultValue={formData.nombreConcurso}
                name="nombreConcurso"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                id="urlConcurso"
                placeholder="Url Personalizada del concurso"
                defaultValue={formData.urlConcurso}
                name="urlConcurso"
              />
            </Col>
            <Col className="col-span">
              <span>
                {API_HOST}/concurso/
                {formData.urlConcurso
                  ? formData.urlConcurso.replaceAll(/\s/g, "").toLowerCase()
                  : formData.nombreConcurso.replaceAll(/\s/g, "").toLowerCase()}
              </span>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    nombreConcurso: "",
    urlConcurso: "",
    fechaInicio: "",
    repeatPasswordfechaFinal: "",
    precio: "",
    guion: "",
    recomendaciones: "",
    urlBanner: "",
    creadoPor: "",
  };
}
