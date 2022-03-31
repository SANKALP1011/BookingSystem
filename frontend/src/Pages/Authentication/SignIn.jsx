import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";
import {NavLink} from "react-router-dom";


export const SignIn = () =>{
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = getAuth();

    const UserSignIn = () =>{
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        swal("Successfully Signed In", "Thank you for registering with us", "success");
        console.log("Registered user: ", user);
        <NavLink exact to='/Cab' />
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
        swal("Oops!", "Please check your password and mail again.", "error");
      });

    }
  return <>
  
  <div className="form">
      <input type="text" placeholder="your email..." name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="your pass" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
      <NavLink exact to='/Cab'>
      <button type="submit" onClick={UserSignIn}>Sign In</button>
      </NavLink>
  </div>
  
  
  </>

};

export default SignIn;