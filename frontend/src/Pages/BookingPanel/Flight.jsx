import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";

export const Flight = () =>{
   
   const [Flights , setFlights] = useState([]);
   Axios.get("")
   .then((response) =>{
       setFlights(response.data);
   })

   return <>
   
   <div className="FlightCard">
       
       
       </div>

   </>

}

export default Flight;