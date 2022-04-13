import React, { useEffect, useState } from "react";
import Axios from "axios";
import swal from "sweetalert";




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

    useEffect(()=>{
      showCabs()
    },[]);

const BookCab = () =>{
  swal("YES","THIS IS DEMO MESSAGE","error")
};

    return <>
   <div className="item-container">
   {Cabs.map((value)=>(
      <div className="card" key={value.id}>
        <img src={value.image}></img>
           <h3>{value.title}</h3>
           <h3>{value.original_title}</h3>
           <h3>{value.original_title_romanised}</h3>
           <h3>{value.description}</h3>
           <h3>{value.director}</h3>
           <button onClick={BookCab}>Book</button>
        </div>
       ))}
   </div>
 

 </>

};

export default Cab;