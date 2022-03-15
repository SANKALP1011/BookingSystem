import React, { useState } from "react";
import Axios from "axios";


export const Cab = () =>{

    const [cabs,setCabs] = useState([]);

    const getCabs = () =>{
        Axios.get("http://localhost:3000/Cabs")
        .then((response)=>{
         setCabs(response.data)
         console.log(response)
        })
    }

    return <>
    
    <button onClick={getCabs}>CABS</button>
    {cabs.map((val,key)=>{
        return <div>
        <h2>{val.CabsCode}</h2>
        </div>
    })}

 </>

};

export default Cab;