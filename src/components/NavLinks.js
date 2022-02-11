import { Link } from "react-router-dom";

const NavLinks = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return ( 
        <ul>
                <li>
                    <Link to="/Online-English-School/teachers" onClick={scrollToTop}>
                        <h3>Teachers</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Online-English-School/materials" onClick={scrollToTop}>
                        <h3>Materials</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Online-English-School/pricing" onClick={scrollToTop}>
                        <h3>Pricing</h3>
                    </Link>
                </li>
                <li>
                    <button id="register-button">
                        <Link to="/Online-English-School/register" onClick={scrollToTop}>Register</Link>
                    </button>    
                </li>
                <li>
                    <button id="login-button">    
                        <Link to="/Online-English-School/login" onClick={scrollToTop}>Login</Link>
                    </button>
                </li>
        </ul> 
     );
}
 
export default NavLinks;