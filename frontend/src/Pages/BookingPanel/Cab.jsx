import React, { useState } from "react";
import Axios from "axios";


export const Cab = () =>{

    const [cabs,setCabs] = useState([]);

    const getCabs = () =>{
        Axios.get("")
        .then(((response)=>{
         setCabs(response.data);
        }))
    }

    return <>
    
    <button onClick={getCabs}>CABS</button>
    
    </>

};

export default Cab;