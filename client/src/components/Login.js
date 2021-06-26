import React from 'react';

function Login() {
    return (
        <div>
            Login
            <br/>
            <input type="text" name="email" id="email" autocomplete="off" placeholder="Your email" />
                <br/>
                <input type="password" name="password" id="password" autocomplete="off" placeholder="Password" />
                <br/>
                <button>Signin</button>
                
        </div>
    );
}

export default Login;