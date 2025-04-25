import React from "react";
import {Link} from "react-router-dom"

const NavBar = ()=>{
    return (
        <nav id="navBar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutMe">About Me</Link>
                </li>
                <li>
                    <Link to="/hobbies">Hobbies</Link>
                </li>
                <li>
                    <Link to="/burugall">r/Daburu</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;