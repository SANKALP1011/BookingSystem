import React, { useEffect, useState } from "react";
import Axios from "axios";
import DetailsCard from "../../Components/DetailsCard";
import Car from "../../Assets/Car.svg";

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


return <>
   <div className="item-container">
   {Cabs.map((value)=>(
      <DetailsCard
          image={Car}
          key={value?.CabsCode}
          name={value?.CabName}
          status={value?.CabStatus}
          company={value?.CabComp}
          cost={value?.CabCost}
          destination={value?.CabDest}
      />
  ))}
   </div>
</>

};

export default Cab;