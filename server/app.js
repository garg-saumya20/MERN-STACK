const mongoose=require('mongoose');
const express=require('express');
const app=express();

const DB=`mongodb+srv://GARG:Garg@1234@cluster0.an2tr.mongodb.net/TTDB?retryWrites=true&w=majority`;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("No connection");
})



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

app.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
});