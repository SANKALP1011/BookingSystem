const e = require("express");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
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
 
app.get("/",function(req,res){
  res.send("Backend side")
})

app.post("/api",function(req,res){
    const Demo = req.params.DemoName;
    console.log(Demo);
    const query = "INSERT INTO Demo (DemoName) VALUES (?)";
    coonection.query(query,[Demo],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log("added");
      }
    })
})

app.listen("3001",function(){
  console.log("connected");
})