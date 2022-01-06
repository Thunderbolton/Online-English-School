const Form = (props) => {
    
    return ( 
        <div>
            <form className="form">
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
                    <button>{props.button}</button>
                </div>
            </form>
        </div>
     );
}
 
export default Form;