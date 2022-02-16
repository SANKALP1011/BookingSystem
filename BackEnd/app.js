const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.urlencoded({extended: true}));

mysql.createConnection({
 "host": "hdhdh",
 "user": "dgdgdg",
 "port": "fgfgfg",
 "database": "dghjgffgd"
});


app.get("/",function(req,res){
    res.send("Backend wokring here")
})

app.listen("3001",function(){
  console.log("connected");
})