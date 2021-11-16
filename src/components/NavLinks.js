import { Link } from "react-router-dom";

const NavLinks = () => {
    return ( 
        <ul>
                <li>
                    <Link to="/teachers">
                        <h3>Teachers</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/materials">
                        <h3>Materials</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/pricing">
                        <h3>Pricing</h3>
                    </Link>
                </li>
                <li>
                    <button id="register-button">
                        <a href="/register">Register</a>
                    </button>    
                </li>
                <li>
                    <button id="login-button">    
                        <a href="/login">Login</a>
                    </button>
                </li>
        </ul> 
     );
}
 
export default NavLinks;