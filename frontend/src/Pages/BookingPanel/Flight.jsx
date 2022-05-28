import React, { useState , useEffect } from "react";
import Axios from "axios";
import {DetailsCard} from "../../Components/DetailsCard";
import Plane from "../../Assets/Plane.svg";

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

return<>
   <div className="item-container">
   {Flights.map((value)=>(
           <DetailsCard
             image={Plane}
             name={value?.FlightName}
             status={value?.FlightStatus}
             company={value?.FlightComp}
             cost={value?.FlightCost}
             destination={value?.FlightDest}
              ></DetailsCard>
            ))}
</div>
   </>

}

export default Flight;