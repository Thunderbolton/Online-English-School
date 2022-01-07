import { Link } from "react-router-dom";
import Form from "./Form";

const Login = () => {

    return ( 
        <div className="login">
            <Form
                heading="Log in to your account"
                username="Username/Email" 
                button="Log in"
                subheading={<Link to="/register">Need an account? Register <p style={{color: '#f018ad'}}>HERE</p></Link>}
                
                />
        </div>
     );
}
 
export default Login;
