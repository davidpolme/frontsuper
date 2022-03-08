import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function getConcursosApi() {
  const url = `${API_HOST}/api/registrarConcursos`;
  const token = getTokenApi();
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
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
      console.log({ inPromise: result });

      return result;
    })
    .catch((err) => {
      return err;
    });
}

  export function getPublicConcursosApi() {
    const url = `${API_HOST}/api/registrarConcursos`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
        console.log({ inPromise: result });

        return result;
      })
      .catch((err) => {
        return err;
      });
  }

export function createConcursoApi(concurso) {
  

const url = `${API_HOST}/api/registrarConcursos`;
const token = getTokenApi();
const params = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(concurso),
};

return fetch(url, params).then((response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
});

}
