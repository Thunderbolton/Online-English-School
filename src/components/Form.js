import { useHistory } from "react-router-dom";

const Form = (props) => {
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/Online-English-School');
    }

    return ( 
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-heading">{props.heading}</h2>
                <div className="form-names">
                    <label>{props.firstName}</label>
                    {props.input} 
                    <label>{props.lastName}</label>
                    {props.input}
                </div>
                <br />    
                <label>{props.username}</label>
                <input type="text" required/>
                <br />
                <label>{props.email}</label>
                {props.input}
                <br />
                <label>Password</label>
                <input type="password" required/>
                <br />
                <label>{props.confirmPassword}</label>
                {props.confirmPasswordInput}
                <br /><br />
                <div className="form-submit">
                    <button type="submit">{props.button}</button>
                </div>
                <h3 className="form-subheading">{props.subheading}</h3>
            </form>
        </div>
     );
}
 
export default Form;