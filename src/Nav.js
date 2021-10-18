import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';




function Nav() {

const navStyle = {
    color: 'yellow'
}

  return (
    <nav>
        <h1> Star Book </h1>
 <ul className="nav-links">

        <Link style={navStyle} to='/'>
            <li>Home</li>
            
        </Link>

        <Link style={navStyle}  to='/friends'>
            <li>Friends</li>
        </Link>


        <Link style={navStyle} to='/aboutus'>
            <li>About Us</li>
        </Link>
</ul>


        
    </nav>
  );
}

export default Nav;