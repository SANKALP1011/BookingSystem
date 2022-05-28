const express = require("express");
const mysql = require("mysql");

  const DbConnection = mysql.createConnection({
    "host": "127.0.0.1",
    "user": "root",
    "port": "3306",
    "database": "Bookingdb",
    "password": "mysqldatabase"
   })
   try{
       DbConnection.connect((err,res)=>{
           if(err){
               console.log(err)
           }
           else{
               console.log("database connected successfully")
           }
       })
   }
   finally{
       console.log("no connectivity issue");
   }




module.exports = DbConnection;