import React from "react";
import { useState } from "react";
import logo from "../../src/Airbnb-logo.jpg"
import magnifier from "../../src/magnifier.png"
import global from "../../src/global.svg"
import ham from "../../src/ham.png"
import icon from "../../src/placeholder.png"

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
            <button className="last-btn"><img src={ham}/><img src={icon}/></button>
        </div>
        
        
        
        </div></>);
}
export default Navbar;