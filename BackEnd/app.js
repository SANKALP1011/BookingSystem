const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const DbConnection = require("../BackEnd/DatabaseService/Database");
const getFlights = require("../BackEnd/Routes/Flight");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

var Flights = require("../BackEnd/Routes/Flight");

const port = "3000"

 
app.get("/",(req,res)=>{
  res.sendStatus("BACKEND IS WORKING HERE");
  console.log("WORKING");
})

app.use(getFlights)


app.get("/Cabs",(req,res)=>{
  const getCabs = "Select* from Cabs";
  coonection.query(getCabs,function(err,results){
    if(err){
      console.log(err)
    }
    else{
      console.log(results)
      res.send(results);
    }
  })
});

app.get("/Trains",(req,res)=>{
  const getTrains = "Select* from Trains";
  coonection.query(getTrains,function(err,results){
    if (err){
      console.log(err);
    }
    else{
      res.send(results);
    }
  })
})

app.listen(port,function(){
  console.log("connected");
})

