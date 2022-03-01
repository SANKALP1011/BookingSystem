import React from "react";
import Axios from "axios";
import { useState } from "react";

export const Main = () =>{

    const [DemoName , setDemoName] = useState('');
    const TestFunction = () => {
        Axios.post("http://localhost:3001/api",{
            DemoName: DemoName
        })
        .then((response) =>{
            console.log(response);
        })
        .catch(err =>{
            console.log(err)
        })

    }
  return <>
         
         <input type="text" name="DemoName" value={DemoName} onChange={(e) =>{
             setDemoName(e.target.value);
         }} />
         <button type="submit" onClick={TestFunction}>ADD</button>
    
    </>


}
export default Main;