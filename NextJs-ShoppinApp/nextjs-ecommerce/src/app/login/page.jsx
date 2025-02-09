import '../css/loginsignup.css';

const LoginSignup = () =>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
           
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="password" />
            </div>
            <button>Continue  </button>
                <p className="loginsignup-login">Already Have an Account?<span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
               </div>
        </div>
        </div>
    )
}

export default LoginSignup;