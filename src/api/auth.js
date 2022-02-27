import {API_HOST, TOKEN} from '../utils/constants';
import jwtDecode from 'jwt-decode';

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

export function getTokenApi(){
  return localStorage.getItem(TOKEN);
}

export function logOutApi() {
  localStorage.removeItem(TOKEN);
}

export function isUserLoggedInApi(){
  const token = getTokenApi()

  if(!token){
    logOutApi();
    return null; 
  }
  if(isExpired(token)){
    logOutApi();
  }
  return jwtDecode(token)
}

export function isExpired(token){
 const {exp} = jwtDecode(token)
 const expire = exp*1000;
 const timeout = expire -Date.now();

 if(timeout < 0){
   return true
 }else{
   return false
 }

}