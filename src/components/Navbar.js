import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../img/menuIcon.svg"
import NavLinks from "./NavLinks";

const Navbar = () => {

    const mobileMenu = ["Teachers", "Materials", "Pricing"];
    const MobileMenuButtons = ["Register", "Login"];

    const [showMenu, setShowMenu] = useState(false);
    
    
    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

        
    return (    
        <nav className="navbar">
            <Link to="/Online-English-School" onClick={scrollToTop}>
                <h1>Online English School</h1>
            </Link>    
            
            {<NavLinks />}

            <img src={menuIcon} onClick={handleClick}></img>

            {!mobileMenu && <NavLinks />}

            <div>
                {showMenu && mobileMenu.map((item, index) =>
                    <Link to={`/Online-English-School/${item}`} className="mobile-links" key={index}> 
                        <h3>{item}</h3>
                    </Link>    
                )}
            </div>
            
            <div className="mobile-buttons-container">
                {showMenu && <Link to={`/Online-English-School/${MobileMenuButtons[0]}`} className="mobile-buttons">
                        <h4 id="register-button">{MobileMenuButtons[0]}</h4>
                    </Link>}
        
                {showMenu && <Link to={`/Online-English-School/${MobileMenuButtons[1]}`} className="mobile-buttons">
                        <h4 id="login-button">{MobileMenuButtons[1]}</h4>
                    </Link>}
            </div>
            
        </nav>    
     );
}
 
export default Navbar;