import React from "react";
import { useState } from "react";
import logo from "../../src/Airbnb-logo.jpg"
import magnifier from "../../src/magnifier.png"

const Navbar = () => {



    return(<><div className="header-container">
        
        <img src={logo}/>

        <button className="mid">
            <a>Anywhere </a>
            <p>|</p>
            <a>Any week </a>
            <p>|</p>
            <a className="last">Add guests</a>
        </button>
        
        
        
        </div></>);
}
export default Navbar;