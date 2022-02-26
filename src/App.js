import React, {useState} from 'react'
import SignInSignUp from './page/SignInSignUp';
export default function App() {

  const [user, setUser] = useState({
    name: "David"
  });

  return (<>{user ? (<><SignInSignUp/></>) : <h1>No estas logueado</h1>}</>);

}