import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function getPostulacionesApi() {
  const url = `${API_HOST}/api/locutores`;
  // const token = getTokenApi();
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      // Authorization: `Bearer ${token}`,
    },
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return {
        code: 404,
        message: "Error en el servidor al cargar los concursos",
      };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}   



export function getPostulacionesByIdApi(idConcurso){
  // todo: No existe el endpoint para traer las postulaciones de un concurso
  // const url = `${API_HOST}/api/locutores/${idConcurso}`;
  //Todo: Mientras pongo un endpoint que existe
  const url = `${API_HOST}/api/locutores`;
  // const token = getTokenApi();
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      // Authorization: `Bearer ${token}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return {
        code: 404,
        message: "Error en el servidor al cargar las postulaciones",
      };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}