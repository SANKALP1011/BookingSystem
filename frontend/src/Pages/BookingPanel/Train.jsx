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
  <div className="item-container">
  {trains.map((value)=>(
    <div className="card" key={value.CabsCode}>
          <h1>{value.TrainDest}</h1>
      </div>
  ))}
  </div>
 </>

};

export default Train;