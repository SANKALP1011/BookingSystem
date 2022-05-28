import React, { useEffect, useState } from "react";
import Axios from "axios";
import DetailsCard from "../../Components/DetailsCard";
import TrainImg from "../../Assets/Train.svg";



export const Train = () =>{

 const [trains,setTrains] = useState([]);

 const getTrains = () =>{
     Axios.get("http://localhost:3000/Trains")
     .then((response)=>{
         setTrains(response.data);
     })
 }

 useEffect(()=>{
     getTrains()
 },[]);

 return<>
  <div className="item-container">
  {trains.map((value)=>(
        <DetailsCard
            image={TrainImg}
            key={value?.TrainCode}
            name={value?.TrainName}
            status={value?.TrainStatus}
            cost={value?.TrainCost}
            destination={value?.TrainDest}
         />
 ))}
  </div>
 </>

};

export default Train;