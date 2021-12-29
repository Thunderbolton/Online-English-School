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
                        <Link to="/register">Register</Link>
                    </button>    
                </li>
                <li>
                    <button id="login-button">    
                        <Link to="/login">Login</Link>
                    </button>
                </li>
        </ul> 
     );
}
 
export default NavLinks;