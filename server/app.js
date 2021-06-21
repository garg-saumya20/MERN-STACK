const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express=require('express');
const app=express();

dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;
require('./db/conn');
const User= require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));



//Syntax -> app.get(path,callback)
// '/' -> represent home page

app.get('/',(req,res)=>{
    res.send("hello world from get request on HOME page ")
    });


//Middleware
const middleware=(req,res,next)=>{
console.log("Hello from Middleware");
next();
}

app.get('/about',middleware,(req,res)=>{
    res.send("hello world from get request on ABOUT page ")
    });

    app.get('/contact',(req,res)=>{
        res.send("hello world from get request on CONTACT page ")
        });

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
});