import React from "react";
import { useState } from "react";
import { getAuth,   signInWithEmailAndPassword } from "firebase/auth";



export const LogIn = () =>{

 const [email,setEmail] = useState('');
 const [passord,setPassord] = useState('');
 const auth = getAuth();

 const UserLogIn = () =>{
    signInWithEmailAndPassword(auth, email, passord)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Singed in user: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error occured: ", errorCode, errorMessage);
    });
}

 return <>
<div className="form">
      <input type="text" placeholder="your email..." name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="your pass" name="password" value={passord} onChange={(e) => setPassord(e.target.value)}/>

      <button type="submit" onClick={UserLogIn}>Log In</button>
  </div>
  </>
};

export default LogIn;