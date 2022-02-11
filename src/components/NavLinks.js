import { Link } from "react-router-dom";

const NavLinks = () => {
    return ( 
        <ul>
                <li>
                    <Link to="/Online-English-School/teachers">
                        <h3>Teachers</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Online-English-School/materials">
                        <h3>Materials</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Online-English-School/pricing">
                        <h3>Pricing</h3>
                    </Link>
                </li>
                <li>
                    <button id="register-button">
                        <Link to="/Online-English-School/register">Register</Link>
                    </button>    
                </li>
                <li>
                    <button id="login-button">    
                        <Link to="/Online-English-School/login">Login</Link>
                    </button>
                </li>
        </ul> 
     );
}
 
export default NavLinks;