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
   <div className="item-container">
   {Cabs.map((value)=>(
            <div className="card" key={value.CabsCode}>
           <h3>{value.CabName}</h3>
           <h3>{value.CabStatus}</h3>
           <h3>{value.CabComp}</h3>
           <h3>{value.CabCost}</h3>
           <h3>{value.CabDest}</h3>
           <button>Book</button>
           </div>
       ))}
   </div>
 

 </>

};

export default Cab;