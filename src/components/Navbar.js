import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../img/menuIcon.svg"
import NavLinks from "./NavLinks";

const Navbar = () => {

    const mobileMenu = ["Teachers", "Materials", "Pricing"];

    const [showMenu, setShowMenu] = useState(false);
    
    
    const handleClick = () => {
        setShowMenu(!showMenu);
    }

        
    return (    
        <nav className="navbar">
            <Link to="/">
                <h1>Online English School</h1>
            </Link>    

            {showMenu && mobileMenu.map((item, index) =>
                <Link to={item} className="mobile-links" key={index}> 
                    <h3>{item}</h3>
                </Link>    
            )}
            
            {<NavLinks />}

            <img src={menuIcon} onClick={handleClick}></img>

            {!mobileMenu && <NavLinks />}
        </nav>    
     );
}
 
export default Navbar;