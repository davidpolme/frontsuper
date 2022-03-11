import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPostulacionesByIdApi } from "../../api/postulaciones";

export default function BasicTable() {
  const [dataisLoaded, setDataisLoaded] = useState(false);
  const [dataPostulaciones, setDataPostulaciones] = useState(null);

  useEffect(() => {
    getPostulacionesByIdApi().then((response) => {
      console.log({ "Concursos particulares": response });
      setDataPostulaciones(response);
      setDataisLoaded(true);
    });
  }, []);

  return (
    <>
      {!dataisLoaded ? (
        <h1>No se han cargado datos</h1>
      ) : (
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
            {!dataPostulaciones ? (
              <h1>Actualmente no hay postulaciones para este concurso</h1>
            ) : (
              dataPostulaciones.map((postulacion) => {
                return (
                  <tr key={postulacion.id}>
                    <td>{postulacion.id}</td>
                    <td>{postulacion.nombre + ' ' + postulacion.apellido}</td>
                    <td>{postulacion.email}</td>
                    <td>{postulacion.observaciones}</td>
                    <td>{postulacion.nombreArchivo}</td>
                    <td>
                      <audio controls>
                        <source src="/" />
                      </audio>
                    </td>
                    <td>Descargar audio</td>
                  </tr>
                );
              })
            )}
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
      )}
    </>
  );
}
