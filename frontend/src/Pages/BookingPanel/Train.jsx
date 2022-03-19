import React, { useState } from "react";
import Axios from "axios";



export const Train = () =>{

 const [trains,setTrains] = useState([]);

 const getTrains = () =>{
     Axios.get("http://localhost:3000/Trains")
     .then((response)=>{
         setTrains(response.data);
     })
 }

 return<>
 
  <button onClick={getTrains}>Trains</button>

  {trains.map((value,key)=>{
      return <div>
          <h1>{value.TrainDest}</h1>
      </div>
  })}
 
 
 </>

};

export default Train;