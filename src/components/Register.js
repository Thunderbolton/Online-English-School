import Form from "./Form";
import register from "../img/register.svg"

const Register = () => {
    return ( 
        <div className="register">
            <Form 
                heading="Sign up in seconds and begin your English learning journey today!"
                firstName="First name"
                lastName="Last name"
                username="Username"
                email="Email"
                input={<input type="text" required></input>}
                confirmPassword="Confirm password"
                confirmPasswordInput={<input type="password" required/>}
                button="Submit" />
            <img src={register} alt="" />
        </div>
     );
}
 
export default Register;

// This is the parent component and i'll try to pass in props to the <RegisterForm /> component.