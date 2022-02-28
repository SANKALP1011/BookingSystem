import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const SignIn = () =>{
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = getAuth();

    const UserSignIn = () =>{
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered user: ", user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });

    }
  return <>
  
  <div className="form">
      <input type="text" placeholder="your email..." name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="your pass" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button type="submit" onClick={UserSignIn}>Sign In</button>
  </div>
  
  
  </>

};

export default SignIn;