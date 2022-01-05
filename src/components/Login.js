import Form from "./Form";

const Login = () => {
    return ( 
        <div className="login">
            <Form
                heading="Log in to your account"
                username="Username/Email" 
                button="Log in"
                />
        </div>
     );
}
 
export default Login;
