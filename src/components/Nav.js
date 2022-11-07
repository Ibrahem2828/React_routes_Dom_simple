import React from "react";
import { Link} from'react-router-dom';
const Nav = () =>{
    return (
        <div class ="Navbar">
        <h1 class="logo">I.S.A</h1>
        <ul class="list">
            <li><Link exact to="/">Home</Link></li>
            <li><Link to="/About">About</Link> </li>
            <li><Link to="/Contact">Contact</Link> </li>
        </ul>
       
       </div>
    )
}

export default Nav;