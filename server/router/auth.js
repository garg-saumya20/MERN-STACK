const express = require('express');
const router=express.Router();

require('../db/conn');
const User= require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send("hello world from get request on HOME page from router");
});

router.post('/register',(req,res)=>{
  

    
    console.log(req.body);
    res.json({message:req.body})
})


module.exports = router;