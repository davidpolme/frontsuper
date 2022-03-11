import {React, useState} from 'react'
import {  Button, Form, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import {
  signInApi,
  setTokenApi,
  setUserIDApi,

} from "../../api/auth";


import "./SignInForm.scss";


export default function SignInForm(props) {
  const {setRefreshcheckLogin}=props;


    const [formData, setFormData] = useState(initialFormValue())
    const [signInLoading, setSignInLoading] = useState(false)

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e =>{
        e.preventDefault();
        let validCount =0;
        values(formData).some(value =>{
            value && validCount++
            return null; 
        })

        if(size(formData) !== validCount){
            toast.warning('Completa todos los campos del formulario')
        }else if(!isEmailValid(formData.email)){
            toast.warning('Email Invalido')
        }else{
            setSignInLoading(true)
            signInApi(formData).then(response =>{
              if(response.message){
                toast.warning(response.message)
              }else{
                
                console.log(response.access_token);

                    setTokenApi(response.access_token);
                    setUserIDApi(response.usuario_id);
                    setRefreshcheckLogin(true);
                }
            }).catch(error =>{
                toast.error("Error del servidor, inténtelo más tarde");
            }).finally(() =>{
                setSignInLoading(false);
            })
        }
    }
  return (
    <div className="sign-in-form">
      <h2>Inicia Sesión</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="form-group">
          <Form.Control
            type="email"
            placeholder="Correo electronico"
            defaultValue={formData.email}
            name="email"
          />
          <Form.Control
            type="password"
            placeholder="Contraseña"
            defaultValue={formData.clave}
            name="clave"
          />
          <Button value="primary" type="submit">
            {!signInLoading ? "Iniciar sesión":<Spinner animation="border"/>}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}


function initialFormValue(){
    return {
        email:'',
        clave:''
    }
}