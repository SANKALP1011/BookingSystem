const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const e = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json);

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
 

// app.post("/api",function(req,res){
//     const Demo = req.body.DemoName;
//     console.log(Demo);
//     const query = "INSERT INTO Demo (DemoName) VALUES '"+Demo+"'";
//     coonection.query(query  ,function(err,result){
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log("added");
//       }
//     })
// })

app.get("/api/Flights",function(req,res){
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
})

app.listen("3008",function(){
  console.log("connected");
})