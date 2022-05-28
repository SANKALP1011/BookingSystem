import React from "react";

export const DetailsCard = ({id,name,status,company,cost,destination}) =>{
  return(
   <div className="card" key={id}>
            <h3>{name}</h3>
            <h3>{status}</h3>
            <h3>{company}</h3>
            <h3>{cost}</h3>
            <h3>{destination}</h3>
            <button>Book</button>
        </div>
)
}
export default DetailsCard;