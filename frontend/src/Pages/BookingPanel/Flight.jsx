import React, { useState , useEffect } from "react";
import Axios from "axios";
import DetailsCard from "../../Components/DetailsCard";

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
   {Flights.map((value)=>{
       <div className="item-container">
           <DetailsCard
             name={value?.FlightName}
             status={value?.FlightStatus}
             company={value?.FlightComp}
             cost={value?.FlightCost}
             destination={value?.FlightDest}
              ></DetailsCard>
       </div>
            })}
   </>

}

export default Flight;