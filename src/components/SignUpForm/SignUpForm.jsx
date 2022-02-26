import { React, useState } from "react";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";

import "./SignUpForm.scss";

export default function SignInForm(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(initialFormValue());

  const onChange = e =>{
    setFormData({ ...formData, [e.target.name]:e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault();
    setShowModal(false);
    console.log(formData)
  };
  return (
    <div className="sign-up-form">
      <h2>Crea tu cuenta</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="form-group">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                defaultValue={formData.nombre}
                name="nombre"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                defaultValue={formData.apellidos}
                name="apellidos"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            defaultValue={formData.email}
            name="email"
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Contraeña"
                defaultValue={formData.password}
                name="password"
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
                defaultValue={formData.repeatPassword}
                name="repeatPassword"
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}


function initialFormValue(){
  return{
    nombre:'',
    apellidos:'',
    email:'',
    password:'',
    repeatPassword:''
  }
}