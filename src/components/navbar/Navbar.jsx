// importing the navbar items
import "./Navbar.scss";

function Navbar(){
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
                    <img src="menu.png" alt=""/>
                </div>
                <div className="menu">

                </div>

            </div>
            
        </nav>
    );
}


export default Navbar; 
