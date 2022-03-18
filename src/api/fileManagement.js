import { URL_STORE_AUDIOS, URL_STORE_IMAGES } from "../utils/constants";

export function uploadAudio(e) {
  const url = URL_STORE_AUDIOS;
var file = e.target[3].files[0];

  const formData = new FormData();

  formData.append('file',file)
  const params = {
    method: "POST",
    body: formData,
  };

  return fetch(url, params)
    .then((response) => {
      console.log({"Esto es lo que resuelve":response})
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
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
