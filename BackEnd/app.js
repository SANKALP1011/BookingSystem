const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.urlencoded({extended: true}));

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
    res.send("Backend wokring here")
})

app.listen("3001",function(){
  console.log("connected");
})