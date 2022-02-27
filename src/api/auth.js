import {API_HOST, TOKEN} from '../utils/constants';

export function signUpApi(user) {
    const url = `${API_HOST}/api/registrarAdmin`;
    const userTemp = {
      ...user,
      email: user.email.toLowerCase()
    };
    delete userTemp.repeatPassword;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
      body: JSON.stringify(userTemp),
    };

    return fetch(url, params).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Email no disponible."}
    }).then(result =>{
        return result;
    }).catch(err => {
        return err;
    });

}

export function signInApi(user){
  const url = `${API_HOST}/api/login`;

  const data ={
    ...user,
    email: user.email.toLowerCase()
  }

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },

    body:JSON.stringify(data)
  };
  return fetch(url,params).then(response => {
    if(response.status >= 200 && response.status <300){
      return response.json();
    }
    return {message: "usuario o contraseña incorrectos"}
  }).then(result => {
    return result;
  }).catch(err => {
    return err
  })
}

export function setTokenApi(token) {
  localStorage.setItem(TOKEN, token);
}