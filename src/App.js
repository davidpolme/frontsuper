import React, {useState,useEffect} from 'react'
import SignInSignUp from './page/SignInSignUp';
import {ToastContainer}from 'react-toastify'
import {AuthContext}from './utils/contexts'
import {isUserLoggedInApi} from './api/auth';

export default function App() {

  const [user, setUser] = useState(null );
  const [loadUser, setLoadUser] = useState(false)
  const [refreshcheckLogin, setRefreshcheckLogin] = useState(false)

  useEffect(() => {
    setUser(isUserLoggedInApi());
    setRefreshcheckLogin(false);
    setLoadUser(true);
  }, [refreshcheckLogin]);

  if(!loadUser) {
    return null;
  }
  
  return (
    <AuthContext.Provider value={user}>
      {user ? (
        <h1>Estas logueado</h1>
      ) : (
        <SignInSignUp setRefreshcheckLogin ={setRefreshcheckLogin}/>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );

}