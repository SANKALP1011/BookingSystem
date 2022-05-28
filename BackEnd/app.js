const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const DbConnection = require("../BackEnd/DatabaseService/Database");
const getInitialRoute = require("../BackEnd/Routes/InitialRoute");
const getFlights = require("../BackEnd/Routes/Flight");
const getCabs = require("../BackEnd/Routes/Cabs");
const getTrains = require("../BackEnd/Routes/Train")
const app = express();
const port = "3000"
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(getInitialRoute)
app.use(getFlights)
app.use(getCabs);
app.use(getTrains)


app.listen(port,function(){
  console.log("connected");
})

