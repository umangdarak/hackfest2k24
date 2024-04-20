const express=require("express");
require("dotenv").config();
const db=require('./MongoDBConnection');
const auth=require('./auth');
const app=express();
app.use(express.json());
app.listen(5000,()=>{
    console.log("server running");
});


//routers
app.use('/user',auth);