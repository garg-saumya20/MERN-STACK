
const bcrypt=require('bcryptjs');
const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

});


// Password hashing using bcrypjs

 userSchema.pre('save',async function(next){
     console.log("garg");
     if(this.isModified('password'))
     {
         this.password= await bcrypt.hash(this.password,12);
         this.cpassword= await bcrypt.hash(this.cpassword,12);
     }
     next();
 });

 const User=new mongoose.model('User', userSchema);
module.exports=User;