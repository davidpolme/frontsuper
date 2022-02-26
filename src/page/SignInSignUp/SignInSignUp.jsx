import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/png/voice-recorder.png";
import LogoWhite from "../../assets/png/mic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faMicrophone,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import "./SignInSignUp.scss";

export default function SignInSignUp() {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  

  const openModal = content => {
    setShowModal(true);
    setContentModal(content);
  }

  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <h1 className="title" xs={6}>
            SuperVoices
          </h1>
        </Row>
        <Row>
          <LeftComponent />
          <RightComponent 
            openModal={openModal}
            setShowModal={setShowModal}
          />
        </Row>
      </Container>
      <BasicModal show={showModal} setShowModal={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={Logo} alt="SuperVoices" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faMicrophone} />
          Lleva tu carrera como locutor al siguiente nivel
        </h2>
        <h2>
          <FontAwesomeIcon icon={faMusic} />
          Conoce las voces de otros locutores
        </h2>
        <h2>
          <FontAwesomeIcon icon={faCalendarDay} />
          Participa en eventos exclusivos y gana grandes premios.
        </h2>
      </div>
    </Col>
  );
}
function RightComponent(props) {
  const {openModal, setShowModal}= props;
  return (
    <Col className="signin-signup__right" xs={6}>
      <div className="">
        <img src={LogoWhite} alt="supervoices" />
        <h2>
          Trabaja con las mejores empresas del mundo, en tan sólo un click
        </h2>
        <h3>Únete a Supervoices hoy mismo</h3>
        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
        >
          Regístrate
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => openModal(<h2>Formulario de login</h2>)}
        >
          Iniciar sesión
        </Button>
      </div>
    </Col>
  );
}
