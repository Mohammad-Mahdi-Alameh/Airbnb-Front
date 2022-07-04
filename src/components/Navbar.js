import React from "react";
import { useState } from "react";
import logo from "../../src/Airbnb-logo.jpg"
import magnifier from "../../src/magnifier.png"
import global from "../../src/global.svg"

const Navbar = () => {



    return(<><div className="header-container">
        
        <img src={logo}/>

        <button className="mid">
            <a>Anywhere </a>
            <p>|</p>
            <a>Any week </a>
            <p>|</p>
            <a className="last">Add guests</a>
            <img src={magnifier}/>
        </button>

        <div className="end">
            <button className="btn">Become a Host</button>
            <button className="btn"><img src={global}/></button>
        </div>
        
        
        
        </div></>);
}
export default Navbar;