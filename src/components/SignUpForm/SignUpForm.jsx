import { React, useState } from "react";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { signUpApi } from "../../api/auth";

import "./SignUpForm.scss";

export default function SignInForm(props) {
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
    } else if (!isEmailValid(formData.email)) {
      toast.warning("Email Invalido");
    } else if (formData.password !== formData.repeatPassword) {
      toast.warning("Las constraseñas deben ser iguales");
    } else if (size(formData.password) < 6) {
      toast.warning("La constraseña debe tener al menos 6 caracteres");
    } else {
      setSignUpLoading(true);
      signUpApi(formData)
        .then((response) => {
          if (response.code) {
            toast.warning(response.message);
          } else {
            toast.success("El usuario ha sido registrado exitosamente ");
            setShowModal(false);
            setFormData(initialFormValue());
          }
        })
        .catch((err) => {
          toast.error("Error del servidor, inténtelo más tarde");
          console.log(err);
        })
        .finally(() => {
          setSignUpLoading(false);
        });
    }
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
                defaultValue={formData.apellido}
                name="apellido"
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
          {!signUpLoading ? "Registrarse" : <Spinner animation="border" />}
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
    password: "",
    repeatPassword: "",
  };
}
