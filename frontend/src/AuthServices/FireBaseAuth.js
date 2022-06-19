import { getAuth} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useState,useEffect, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {auth} from "firebase/compat/auth";
import { firebaseConfig } from "../config/firebase.config";

firebase.initializeApp(firebaseConfig);


export const AuthContext = createContext();

export const AuthContextProvider = props =>{
    const [user,setUser] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        const unsubsribe = firebase.auth().onAuthStateChanged(getAuth,setUser,setError)
        return () => unsubsribe()
    },[])
    return <AuthContext.Provider value={{user,error}} {...props}/>
}

export const useAuthState= () => {
    const auth = useContext(AuthContext)
    return {...auth,isAuthenticated: auth.user != null}
}