import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    const loginUser=async (e)=>
    {
e.preventDefault();
const res=await fetch("/signin",{
    method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
        const data=res.json();
        if(res.status===400 || !data)
        {
            window.alert("Invalid credentials...");
        }
        else
        {
           window.alert("Login Successfuly...");
           history.push("/");
        }

    }
    return (
        <div>
            Login
            <br/>
            <form method="POST">
            <input type="text" name="email" id="email" autocomplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" />
                <br/>
                <input type="password" name="password" id="password" autocomplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />
                <br/>
                <button onClick={loginUser}>Signin</button>
                </form>
        </div>
    );
}

export default Login;