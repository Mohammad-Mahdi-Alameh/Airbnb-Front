import React from "react";
import { useState } from "react";
import logo from "../../src/Airbnb-logo.jpg"

const Navbar = () => {



    return(<><div className="header-container">
        
        <img src={logo}/>

        <button className="mid">
            <a>Anywhere |</a>
            <a>Any week |</a>
            <a>Add week</a>
        </button>
        
        
        
        </div></>);
}
export default Navbar;