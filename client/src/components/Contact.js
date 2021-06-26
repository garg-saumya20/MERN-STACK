import React from 'react';

function Contact() {
    return (
        <>
        <hr/>
            Phone:9044900735
            <br/>
            Email:garg.saumya20@gmail.com
            <br/>
            Address:Bareilly
            <hr/>
            <h3>Get in Touch</h3>
            <input type="text" name="email" id="email"required="true"  placeholder="Your name" />
            <input type="text" name="email" id="email"required="true"  placeholder="Your phone" />
            <input type="text" name="email" id="email"required="true"  placeholder="Your email" />
            <br/>
         <textarea className="" id=""  cols="30" row="10" placeholder="Message"></textarea>
        <br/>
         <button type="submit">Send message</button>
        </>
       
    );
}

export default Contact;