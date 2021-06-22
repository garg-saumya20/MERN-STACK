const express = require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');

require('../db/conn');
const USER= require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send("hello world from get request on HOME page from router");
});

router.post('/register',async (req,res)=>{
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled all the fields" });
    }
    
    try{
        const userExist= await USER.findOne({email:email});
        if(userExist)
        {
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new USER({name,email,phone,work,password,cpassword});
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (err){
        console.log(err);
    }
    
    
});

// Forr login, we have to check 3 condition: no empty fields , email should already have registered , password should be matched.
// Forr transfering data from backened to frontend, we always use POST request.

router.post('/signin', async (req,res)=>{
    try{
               const {email,password}=req.body;
                if(!email || !password)
                {
                    return res.status(400).json({ error: "Please filled all the fields" });
                }
                const userLogin= await USER.findOne({email:email});

                 if(userLogin)
                 {
                    const isMatch= await bcrypt.compare(password,userLogin.password); 
                    if(!isMatch)
                    {
                        res.status(400).json({error:"Invalid Credentials pass"});
                    }
                    else
                    {
                        res.json({message:"User singned in successfully"});
                    }
                    console.log(userLogin);
                 }
                 else
                 {
                    res.status(400).json({error:"Invalid Credentials"});
                 }
               //verifying hash password
               
              
    } catch(err){
        console.log(err);
    }
});
module.exports = router;