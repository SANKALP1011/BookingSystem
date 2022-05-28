const express = require("express");
const DbConnection = require("../DatabaseService/Database")
const FlightRouter = express.Router();

    FlightRouter
     .get("/Flights",(req,res) => {
        const getFlights = "Select* from Flights";
        DbConnection.query(getFlights,function(err,results){
          if(err){
            console.log(err)
          }
          else{
            console.log(results);
            res.send(results);
          }
        })
      });
      
module.exports = FlightRouter;