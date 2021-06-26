import React from 'react';
import {useState} from "react";
function Signup() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });
    let name,value;
    function handleInputs(e)
    {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    return (
        <>
        SignUp
            <div className="Signup">
                <input type="text" name="name" id="name" autocomplete="off" value={user.name} onchange={handleInputs} placeholder="Your name" />
                <br/>
                <input type="text" name="email" id="email" autocomplete="off" value={user.email} onchange={handleInputs} placeholder="Email" />
                <br/>
                <input type="text" name="phone" id="phone" autocomplete="off" value={user.phone} onchange={handleInputs} placeholder="Phone" />
                <br/>
                <input type="text" name="work" id="work" autocomplete="off" value={user.work} onchange={handleInputs} placeholder="Profession" />
                <br/>
                <input type="password" name="password" id="password" autocomplete="off" value={user.password} onchange={handleInputs} placeholder="Password" />
                <br/>
                <input type="password" name="cpassword" id="cpassword" autocomplete="off" value={user.cpassword} onchange={handleInputs} placeholder="Confirm Password" />
                <br/>
                <button>Register</button>
                
            </div>
        </>
    );
}

export default Signup;