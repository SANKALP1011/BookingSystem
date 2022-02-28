import React from "react";
import Main from "./Pages/Main";
import Home from "../src/Pages/Home";
import LogIn from "../src/Pages/Authentication/LogIn";
import SignIn from "../src/Pages/Authentication/SignIn";
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
      </Routes>
    </Router>

  </>
}

export default App;
