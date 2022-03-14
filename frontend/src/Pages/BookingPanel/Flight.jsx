import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";

export const Flight = () =>{
   
   const [Flights , setFlights] = useState([]);
   const showFlights = () =>{
    Axios.get("http://localhost:3000/Flights")
    .then((response) =>{
      console.log(response);
      setFlights(response.data);
    })
   }
   



   return <>

   <button onClick={showFlights}>Show flights</button>
   
   
       {Flights.map((val,key)=>{
           return <div className="FlightCard">
           
           <h1>{val.FlightName}</h1>
           </div>
       })}
       
    

   </>

}

export default Flight;