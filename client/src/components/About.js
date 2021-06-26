import React from 'react';

function About() {
    return (
        <div>
            Saumya garg<br/>
            MERN Developer<br/>
            Rankings:1/10
            <br/>
            <button>Edit Profile</button>
            <ul className="nav" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" href="#home" data-toggle="tab" role="tab">About</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="#home" data-toggle="tab" role="tab">Timeline</a>
  </li>
  
</ul>
<hr/>
        </div>
    );
}

export default About;