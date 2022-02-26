import React from "react";
import { Modal } from "react-bootstrap";
import logoWhite from "../../../assets/png/mic.png";

import "./BasicModal.scss";

export default function BasicModal(props) {
  const { show, setShowModal, children } = props;

  return (
    <Modal
      className="basic-modal"
      show={show}
      onHide={() => setShowModal(false)}
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <img src={logoWhite} alt="superVoices" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
