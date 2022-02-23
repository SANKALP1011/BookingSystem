const e = require("express");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors);
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


app.post("/",function(req,res){
    const DemoName = req.body.DemoName;
    console.log(DemoName);
    const query = "INSERT INTO Demo (DemoName) VALUES (?)";
    coonection.query(query,[DemoName],function(err,result){
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