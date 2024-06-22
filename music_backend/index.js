// wew use express
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;
// console.log(process.env);

// connect mongodb to our node app
// mongoose.connect() takes two argument : 1.which db to connect(db url)
// 2. connection option
mongoose.connect("mongodb+srv://yadavyashraj55:" + process.env.MONGO_PASSWORD + "@cluster0.e1woxxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        userNewUrlparser:true,
        useUnifiedTopology:true,
    })
    .then((x)=>{
        console.log("connected to mongo");

    })
    .catch((err)=> {
        console.log("Error while connecting to mongo");
    })


// API : GET type:/: return text"hello world"
app.get("/",(req , res) =>{
    // req contain all data for the request
    // res contains all data for the response
    res.send("HELLO WORLD");
});
// now we want to tell express that our server will run on localhost :8000
app.listen(port, ()=>{
    console.log("App is running on port "+port);
});