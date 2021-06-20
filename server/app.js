const express=require('express');
const app=express();

//Syntax -> app.get(path,callback)
// '/' -> represent home page
app.get('/',(req,res)=>{
res.send("hello world from get request on HOME page ")
});

app.get('/about',(req,res)=>{
    res.send("hello world from get request on ABOUT page ")
    });

    app.get('/contact',(req,res)=>{
        res.send("hello world from get request on CONTACT page ")
        });

app.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
});