import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useState,useEffect, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

export const AuthContext = createContext();

export const AuthContextProvider = props =>{
    const [user,setUser] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        const insert = onAuthStateChanged(getAuth,setUser,setError);
        return () => {insert()}
    },[])
    return <AuthContext.Provider value={{user,error}} {...props}/>
}

export const useAuthState= () => {
    const auth = useContext(AuthContext)
    return {...auth,isAuthenticated: auth.user != null}
}