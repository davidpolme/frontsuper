import React, { useState } from "react";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { API_HOST } from "../../utils/constants";
import DatePicker from "react-datepicker";
import { uploadImg } from "../../api/driveFiles";
import "./CreateConcurso.scss";

export default function CreateConcurso(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [createConcLoading, setCreateConcLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   function onSubmit(e) {
     e.preventDefault();
     uploadImg(e).then(response => {
      console.log({"Este es el que necesito":response});
     })
      
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
              <span id="myText">
                {API_HOST}/concurso/
                {formData.urlConcurso
                  ? formData.urlConcurso.replaceAll(/\s/g, "-").toLowerCase()
                  : formData.nombreConcurso
                      .replaceAll(/\s/g, "-")
                      .toLowerCase()}
              </span>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col className="inlineItems">
              <Form.Label htmlFor="initialDate">Fecha inicial</Form.Label>
              <DatePicker
                id="initialDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
              />
            </Col>

            <Col className="price inlineItems">
              <Form.Label>Precio</Form.Label>
              <span>$</span>
              <Form.Control
                type="number"
                min="0"
                step="500"
                placeholder="Valor del concurso"
                defaultValue={formData.precio}
                name="precio"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="form-group">
          <Row>
            <Col className="inlineItems">
              <Form.Label htmlFor="endDate">Fecha Final</Form.Label>
              <DatePicker
                id="endDate"
                selected={endDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
              />
            </Col>
            <Col className="inlineItems">
              <Form.Label>Banner</Form.Label>
              <Form.Control id="banner" type="file" accept="image/*" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="form-group">
          <Row>
            <Col>
              <Form.Label>Recomendaciones</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="lorem ipsum dolor sit amet, consectetur adip"
                defaultValue={formData.recomendaciones}
                name="recomendaciones"
              />
            </Col>
            <Col>
              <Form.Label>Guión</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="lorem ipsum dolor sit amet, consectetur adip"
                defaultValue={formData.guion}
                name="guion"
              />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          {!createConcLoading ? (
            "Crear Concurso"
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
    nombreConcurso: "",
    urlConcurso: "",
    fechaInicio: "",
    fechaFinal: "",
    precio: "30000",
    guion: "",
    recomendaciones: "",
    urlBanner: "",
    creadoPor: "",
  };
}
