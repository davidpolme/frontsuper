import { URL_STORE_IMAGES } from "../utils/constants";

export function uploadImg(e ) {
  
  //--------El Reader Onload-------------------------------
  var file = e.target[5].files[0];
  
  
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      //.. once finished..
  
      var rawLog = reader.result.split(",")[1]; //extract only the file data part
  
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
  
      const url = URL_STORE_IMAGES;
  
      const params = {
        method: "POST",
        body: JSON.stringify(dataSend),
      };
  
      //Esta es la promesa
      fetch(url, params) //send to Api
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          resolve( result)
          cargarURLResultado(result);
          console.log({ "Dentro de la promesa": result });
        })
        .catch((err) => {
          console.log(err);
        }) // Or Error in console
      //-----------------------------------------------
    };


  })



  //---------------------------------------
  
}

function cargarURLResultado(resultado) {
  console.log({ "urlResultado_En la nueva Funcion": resultado });
}
