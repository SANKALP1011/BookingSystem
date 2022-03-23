import React from "react";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import LogIn from "./Pages/Authentication/LogIn";
import SignIn from "./Pages/Authentication/SignIn";
import Flight from "./Pages/BookingPanel/Flight";
import Cab from "./Pages/BookingPanel/Cab";
import Train from "./Pages/BookingPanel/Train";
import "../src/Styles/Card.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config/firebase.config";

function App() {
  initializeApp(firebaseConfig);
  return <>
 <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/Flight" element={<Flight />}/>
        <Route exact path="/Cab" element={<Cab />}/>
        <Route exact path="/Train" element={<Train />}/>
      </Routes>
    </Router>

  </>
}

export default App;
