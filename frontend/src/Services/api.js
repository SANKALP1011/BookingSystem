import Axios from "axios";
import React from "react";


export const showCabs = () => {
    Axios.get("http://localhost:3000/Cabs")
    .then((response)=>{
     setCabs(response.data)
     console.log(response)
     console.log(response.data)
    })
};

