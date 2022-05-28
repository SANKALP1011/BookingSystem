const express = require("express");
const InitialRouter = express.Router();

InitialRouter.
get("/",(req,res)=>{
    res.send("This is the api for booking system")
})
module.exports = InitialRouter;