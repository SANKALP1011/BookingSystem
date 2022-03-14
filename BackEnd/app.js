const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { default: App } = require("../frontend/src/App");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cors());

const port = "3000"

var coonection =  mysql.createConnection({
 "host": "127.0.0.1",
 "user": "root",
 "port": "3306",
 "database": "Bookingdb",
 "password": "mysqldatabase"
});

coonection.connect(function(err,result){
  if (err){
    console.log(err)
  }
  else{
    console.log("Database connected")
  }
})
 
app.get("/",(req,res)=>{
  res.sendStatus("BACKEND IS WORKING HERE");
  console.log("WORKING");
})

app.post("/api",(req,res) => {
    const Demo = req.body.DemoName;
    console.log(Demo);
    const query = "INSERT INTO Demo (DemoName) VALUES '"+Demo+"'";
    coonection.query(query  ,function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log("added");
      }
    })
})

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

app.get("/Cabs",(res,req)=>{
  const getCabs = "Select * from Cabs";
  coonection.query(getCabs,function(err,results){
    if(err){
      console.log(err)
    }
    else{
      console.log(results)
    }
  })
})

app.listen(port,function(){
  console.log("connected");
})