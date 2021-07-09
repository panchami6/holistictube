import React, { useState } from 'react';
import {useAuth} from "../../Context/auth-context";
import { Navigate, Link } from "react-router-dom";
import "../Login/login.css";

export default function SignUp() {
  const [newName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const { signUpSuccessful, signUpUserWithCredentials } = useAuth();

  return signUpSuccessful ? (<Navigate to ="/login" />) : (
    <>
      <div className="loginBox">
        <h1>SignUp</h1>   
            <form>
                <div className="loginForm">
                    <input onChange = {(e) => setName(e.target.value)} autoComplete="off" placeholder="name"/>
                </div>
                <div className="loginForm">
                    <input onChange = {(e) => setEmail(e.target.value)} autoComplete="off" placeholder="email"/>
                </div>
                <div className="loginForm">
                    <input onChange = {(e) => setNewPassword(e.target.value)} autoComplete="off" placeholder="password"  type="Password" />
                </div>
                <button onClick = {() => signUpHandler(newName, email, password)} type="button" className = "btn-login">SignUp</button>
            </form>
            <div style = {{color:"white", paddingTop:"1rem"}}>Already have an account? <Link to ="/login">Login</Link></div>
      </div>
    </>
  );

  function signUpHandler(newName, email, password) {
    signUpUserWithCredentials(newName, email, password);
    }
}



