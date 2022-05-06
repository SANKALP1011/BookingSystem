var express = require("express");
var app = express();

const Flights = () =>{
    app.get("/Flights",(req,res) => {
        const getFlights = "Select* from Flights";
        coonection.query(getFlights,function(err,results){
          if(err){
            console.log(err)
          }
          else{
            console.log(results);
            res.send(results);
          }
        })
      });
}



  module.exports = Flights;