import React, { useState } from "react";
import Axios from "axios";


export const Cab = () =>{

    const [Cabs,setCabs] = useState([]);

    const showCabs = () => {
        Axios.get("http://localhost:3000/Cabs")
        .then((response)=>{
         setCabs(response.data)
         console.log(response)
         console.log(response.data)
        })
    }

    return <>
    
    <button onClick={showCabs}>CABS</button>
   
    {Cabs.map((val,key)=>{
           return <div className="FlightCard">
           <h1>{val.CabName}</h1>
           </div>
       })}

 </>

};

export default Cab;