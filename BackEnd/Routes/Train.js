const express = require("express");
const DbConnection = require("../DatabaseService/Database")
const TrainRouter = express.Router();

TrainRouter.
get("/Trains",(req,res)=>{
    const getTrains = "Select* from Trains";
    DbConnection.query(getTrains,function(err,results){
      if (err){
        console.log(err);
      }
      else{
        res.send(results);
      }
    })
  })
module.exports = TrainRouter;