import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPostulacionesByIdApi } from "../../api/postulaciones";

export default function BasicTable() {
    useEffect(() => {
      getPostulacionesByIdApi().then((response) => {
        console.log({ "Concursos particulares": response });
      });
    }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Completo</th>
          <th>Email</th>
          <th>Observaciones</th>
          <th>nombreArchivo</th>
          <th>Audio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>
            <audio controls>
              <source src="/" />
            </audio>
          </td>
          <td>Descargar audio</td>
        </tr>
      </tbody>
      {/*  <tbody>
          {data_postulaciones.map((postulacion) => {
            console.log("postulacion" + postulacion);
            if (postulacion) {
              return (
                <tr key={postulacion.id}>
                  <td>{postulacion.id}</td>
                  <td>{postulacion.nombre + " " + postulacion.apellido}</td>
                  <td>{postulacion.email}</td>
                  <td>{postulacion.observaciones}</td>
                  <td>{postulacion.nombreArchivo}</td>
                  <td>
                    <audio controls>
                      <source src={postulacion.pathArchivo} />
                    </audio>
                  </td>
                </tr>
              );
            }
          })}
        </tbody> */}
    </Table>
  );
}

/* 

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_postulaciones: [],
      DataisLoaded: false,
      id_concurso: 0,
      url_concurso: "",
    };
}
render() {

    const { data_postulaciones, DataisLoaded } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Los datos se están cargando... </h1>
        </div>
      );
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Observaciones</th>
            <th>nombreArchivo</th>
            <th>Audio</th>
          </tr>
        </thead>

        <tbody>
          {data_postulaciones.map((postulacion) => {
            console.log("postulacion" + postulacion);
            if (postulacion) {
              return (
                <tr key={postulacion.id}>
                  <td>{postulacion.id}</td>
                  <td>{postulacion.nombre + " " + postulacion.apellido}</td>
                  <td>{postulacion.email}</td>
                  <td>{postulacion.observaciones}</td>
                  <td>{postulacion.nombreArchivo}</td>
                  <td>
                    <audio controls>
                      <source src={postulacion.pathArchivo} />
                    </audio>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    );
  }
}

export default BasicTable;
 */