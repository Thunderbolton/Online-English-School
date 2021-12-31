const RegisterForm = () => {
    return ( 
        <div>
            <form className="register-form">
                <div>
                    <label>First Name</label>
                    <input type="text" required/>
                    
                    <label>Last Name</label>
                    <input type="text" required/>
                </div>

                <br />    
                <label>Username</label>
                <input type="text" required/>
                <label>Email</label>
                <input type="text" required/>
                <label>Password</label>
                <input type="text" required/>
                <label>Confirm Password</label>
                <input type="text" required/>   
            </form>
        </div>
        
            
        
     );
}
 
export default RegisterForm;