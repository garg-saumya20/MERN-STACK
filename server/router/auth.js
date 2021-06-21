const express = require('express');
const router=express.Router();

require('../db/conn');
const USER= require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send("hello world from get request on HOME page from router");
});

router.post('/register',(req,res)=>{
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled all the fields" });
    }
    USER.findOne({ email: email })
    .then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new USER({ name, email, phone, work, password, cpassword });
        user.save().then(() => {
            res.status(201).json({ message: "User registered successfully" });
        }).catch((err) => {
            res.status(500).json({ error: "Failed to register" });
        })
    }).catch(err => {
        console.log(err);
    })
   
    
    
});


module.exports = router;