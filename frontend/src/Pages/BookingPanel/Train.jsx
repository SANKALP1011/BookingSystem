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
    <div className="card" key={value.TrainCode}>
          <h3>{value.TrainCode}</h3>
          <h3>{value.TrainName}</h3>
          <h3>{value.TrainStatus}</h3>
          <h3>{value.TrainCost}</h3>
          <h3>{value.TrainDest}</h3>
          <button>Book</button>
      </div>
  ))}
  </div>
 </>

};

export default Train;