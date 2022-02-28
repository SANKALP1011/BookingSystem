import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () =>{

    return <>
    
  <NavLink exact to='/SignIn'>
      <button type="button">Sign In</button>
  </NavLink>
   
  <NavLink exact to='/LogIn'>
      <button type="button">Log In</button>
  </NavLink>

 </>

};

export default Home;