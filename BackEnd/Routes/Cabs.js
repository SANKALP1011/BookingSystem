const express = require("express");
const DbConnection = require("../DatabaseService/Database")
const CabRouter = express.Router();

CabRouter.
get("/Cabs",(req,res)=>{
    const getCabs = "Select* from Cabs";
    DbConnection.query(getCabs,function(err,results){
      if(err){
        console.log(err)
      }
      else{
        console.log(results)
        res.send(results);
      }
    })
  });

module.exports = CabRouter;