import React , {Fragment} from "react";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import LogIn from "./Pages/Authentication/LogIn";
import SignIn from "./Pages/Authentication/SignIn";
import Flight from "./Pages/BookingPanel/Flight";
import Cab from "./Pages/BookingPanel/Cab";
import Train from "./Pages/BookingPanel/Train";
import "../src/Styles/Card.css";
import { BrowserRouter as Router,Routes,Route, NavLink} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config/firebase.config";
import { AuthContextProvider,useAuthState } from "./AuthServices/FireBaseAuth";
import {onAuthStateChanged} from "firebase/auth";

function App() {

  initializeApp(firebaseConfig);

  const RegisteredRoute = ({Component:C,...props})=>{
     const {RegisteredUser} = useAuthState();
     console.log(`Registered route : ${RegisteredUser}`);
     return(
      <Routes>
                <Route
      {...props}
      render={routeProps=> !RegisteredUser ? <C {...routeProps}/> : <Navigate exact to="/LogIn"/>}
      />
      </Routes>
     )
  }

  const UnRegisteredRoute = ({Component:C,...props})=>{
     const {UnRegisteredUser} = useAuthState();
     console.log(`Unregsitered user ${UnRegisteredUser}`)
     return(
      <Routes>
            <Route
        {...props}
      render={routeProps => !UnRegisteredUser ? <C {...routeProps}/> : <Navigate to="/"/>}
      />
      </Routes>
     )
  }



  return <>
  <AuthContextProvider>
    <Router>
        <RegisteredRoute exact path="/" element={<Home />}/>
        <UnRegisteredRoute exact path="/LogIn"  element={<LogIn />} />
        <UnRegisteredRoute exact path="/SignIn"  element={<SignIn />} />
        <RegisteredRoute exact path="/Flight" element={<Flight />}/>
        <RegisteredRoute exact path="/Cab"  element={<Cab />}/>
        <RegisteredRoute exact path="/Train" element={<Train />}/>
    </Router>
  </AuthContextProvider>
  </>
}

export default App;
