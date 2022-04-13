import React, { useState , useEffect } from "react";
import Axios from "axios";

export const Flight = () =>{
   
   const [Flights , setFlights] = useState([]);
   const showFlights = () =>{
    Axios.get("http://localhost:3000/Flights")
    .then((response) =>{
      console.log(response);
      setFlights(response.data);
    })
   }

   useEffect(()=>{
     showFlights()
   },[]);

   



   return <>
   <div className="item-container">
   {Flights.map((value)=>(
           <div className="card" key={value.FlightCode}>
           <h3>{value.FlightName}</h3>
           <h3>{value.FlightStatus}</h3>
           <h3>{value.FlightComp}</h3>
           <h3>{value.FlightCost}</h3>
           <h3>{value.FlightDest}</h3>
           <button>Book</button>
           </div>
       ))}
   </div>
    
       
    

   </>

}

export default Flight;