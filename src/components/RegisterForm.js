const RegisterForm = () => {
    return ( 
        <div>
            <form className="register-form">
                <h2>Sign up in seconds and begin your English learning journey today!</h2>
                <div className="register-form-names">
                    <label>First Name</label>
                    <input type="text" required/>
                    <label>Last Name</label>
                    <input type="text" required/>
                </div>
                <br />    
                <label>Username</label>
                <input type="text" required/>
                <br />
                <label>Email</label>
                <input type="text" required/>
                <br />
                <label>Password</label>
                <input type="password" required/>
                <br />
                <label>Confirm Password</label>
                <input type="password" required/>
                <br /><br />
                <div className="register-form-submit">
                    <button>Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default RegisterForm;