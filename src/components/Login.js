import Form from "./Form";

const Login = () => {
    return ( 
        <div className="login">
            <Form
                heading="Log in to your account"
                username="Username/Email" 
                button="Log in"
                subheading="Need an account? Register here"
                />
        </div>
     );
}
 
export default Login;
