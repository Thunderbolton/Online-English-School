import RegisterForm from "./RegisterForm";
import register from "../img/register.svg"

const Register = () => {
    return ( 
        <div className="register">
            <RegisterForm />
            <img src={register} alt="" />
        </div>
     );
}
 
export default Register;