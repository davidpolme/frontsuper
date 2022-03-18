import { URL_STORE_AUDIOS, URL_STORE_IMAGES } from "../utils/constants";
export function uploadAudio(e) {
  //--------El Reader Onload-------------------------------
  var file = e.target[3].files[0];

  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      //.. once finished..
      const url = URL_STORE_AUDIOS;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        body: file,
      };
      //Esta es la promesa
      fetch(url, params) //send to Api
        .then((response) => {
          console.log({ "Response del file management": response });
          return response.json();
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    };
  });
}

export function uploadImage(e) {
  //--------El Reader Onload-------------------------------
  debugger
  console.log({ "Evento file management 1": e });
  var file = e.target[5].files[0];
  console.log({ "Evento file management 2":file });
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = function (e) {
      //.. once finished..
      const url = URL_STORE_IMAGES;
      const params = {
        method: "POST",
        body: file,
      };

      console.table({ params: params });
      //Esta es la promesa
      fetch(url, params) //send to Api
        .then((response) => {
          console.log({ "Response del uploadImage": response });
          return response.json();
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    };
  });
}
