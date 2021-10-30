const Navbar = () => {
    return (    
        <nav className="navbar">
            <h1>Online English School</h1>
            <ul>
                <li>
                    <h3>Teachers</h3>
                </li>
                <li>
                    <h3>Materials</h3>
                </li>
                <li>
                    <h3>Pricing</h3>
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
        </nav> 
            
     );
}
 
export default Navbar;