import React from "react";
import "./Error404.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function Error404() {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <p>Lo sentimos, no hemos podido encontrar la voz que buscabas</p>
      <FontAwesomeIcon icon={faMicrophone} />
    </div>
  );
}
