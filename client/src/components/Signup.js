import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
    const history=useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
    });
    let name, value;
    const handleInputs = (event) => {
        console.log("garg")
        console.log(event.target.value);
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data=await res.json();
        if(data.status===422 || !data)
        {
             window.alert("Invalid Registration");
             console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successfull...");
            console.log("Registration Successfull...");
            history.push("/login")
        }
    }
    return (
        <>
            SignUp
            <form method="POST">
                <input type="text" name="name" id="name" autocomplete="off" value={user.name} onChange={handleInputs} placeholder="Your name" />
                <br />
                <input type="email" name="email" id="email" autocomplete="off" value={user.email} onChange={handleInputs} placeholder="Email" />
                <br />
                <input type="text" name="phone" id="phone" autocomplete="off" value={user.phone} onChange={handleInputs} placeholder="Phone" />
                <br />
                <input type="text" name="work" id="work" autocomplete="off" value={user.work} onChange={handleInputs} placeholder="Profession" />
                <br />
                <input type="password" name="password" id="password" autocomplete="off" value={user.password} onChange={handleInputs} placeholder="Password" />
                <br />
                <input type="password" name="cpassword" id="cpassword" autocomplete="off" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" />
                <br />
                <button onClick={PostData}>Register</button>
            </form>
        </>
    );
}

export default Signup;