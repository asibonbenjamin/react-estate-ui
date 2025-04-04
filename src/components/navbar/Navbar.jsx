// importing the navbar items
import { useState } from "react";
import "./Navbar.scss";

function Navbar(){

    // constant for the menu icon in mobile view mode
    const [open, setOpen] = useState(false)


    return(
        <nav>
            {/* right hand items */}
            <div className="left">
                <a href="/" className="logo">
                    <img  src="/logo.png" alt=""/>
                    <span>Estate</span>
                </a>

                <div className="navbarLinks">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>

                </div>
                
            </div>
            

            {/* right hand items */}
            <div className="right">
                <a href="/">Sign In</a>
                <a href="" className="register" >Sign Up</a>

                <div className="menuIcon">
                    <img src="menu.png" alt="" 
                    onClick={() => setOpen((prev) => !prev)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a> 
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>
                </div>

            </div>
            
        </nav>
    );
}


export default Navbar; 
