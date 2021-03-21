import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import intelpixel from "../../images/intelpixel.png"; // with import
import { signupApi } from "../../services/api";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
let Signup = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [emailAgain, setEmailAgain] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();
  const [resMessage, setResMessage] = useState("");
  const [resType, setResType] = useState("");

  useEffect(() => { }, []);
  const signup = () => {
    if (!email || !emailAgain || email !== emailAgain) {
      setResType("error");

      setResMessage('Email does not match');
      return ;
    }
    if (!password || !passwordAgain || password !== passwordAgain) {
      setResType("error");

      setResMessage('Password does not match');
      return ;
    }
    signupApi({
      "user": {
        "name": email,
        "email": email,
        "username": email,
        "password": password,
        "phone": email
      }
    })
      .then((res) => {
        console.log(res);
        if (res.status) {
          setResType("success");
          
        }
        else {
          setResType("error");
        }
        setResMessage(res.message);
      })
      .catch((e) => {
        console.log("ERROR");
        console.log(e);
      });
  }
  return (
    <div className="container-fluid signupPage">
      <div className="row">
        <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
          <div className="register-logo-wrap">
            <a href="#">
              <img id="main-logo" src={intelpixel} />
            </a>
          </div>

          <div className="main-content-container container-fluid register-wrap">
            <div className="register-head">
              <h2>Sign Up</h2>
              <p>
                Already have an account? <a href="/signin">Log In</a>
              </p>
            </div>

            <div className="register-box">
              <div className="register-form-wrap">
                <form>
                  <div className={`form-group ${email && email.trim() === '' ? '' : 'active'}`}>
                    <input
                      type="text"
                      className="form-control"
                      id="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label htmlFor="Email">Email</label>
                  </div>
                  <div className={`form-group ${emailAgain && emailAgain.trim() === '' ? '' : 'active'}`}>
                    <input
                      type="text"
                      className="form-control"
                      id="EmailAgain"
                      value={emailAgain}
                      onChange={(e) => {
                        setEmailAgain(e.target.value);
                      }}
                    />
                    <label htmlFor="EmailAgain">Type your email again</label>
                  </div>
                  <div className={`form-group ${password && password.trim() === '' ? '' : 'active'}`}>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className={`form-group ${passwordAgain && passwordAgain.trim() === '' ? '' : 'active'}`}>
                    <input
                      type="password"
                      className="form-control"
                      id="PasswordAgain"
                      value={passwordAgain}
                      onChange={(e) => {
                        setPasswordAgain(e.target.value);
                      }}
                    />
                    <label htmlFor="PasswordAgain">Type your password again</label>
                  </div>

                  <div className="reg-frm-action">
                    <button className="btn btn-primary" onClick={(e) => {
                      e.preventDefault();
                      signup();
                    }}>
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="register-btn-wrap">
                <div className="social-icon-btn-wrap">
                  <a href="#" className="facebook-btn">
                    <i className="fab fa-facebook-f"></i> Continue with Facebook
                  </a>
                  <a href="#" className="google-btn">
                    <i className="fab fa-google"></i> Continue with Google
                  </a>
                  <a href="#" className="apple-btn">
                    <i className="fab fa-apple"></i> Continue with Apple
                  </a>
                </div>
              </div>
            </div>

            <div className="reg-box-note">
              <p>
                * By signing up, you agree to our{" "}
                <a href="" target="_blank">
                  Terms of Use
                </a>{" "}
                and to
                <br />
                recive wix emails & updates and acknowledge that
                <br /> you read our{" "}
                <a href="" target="_blank">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
      <Snackbar open={resMessage != ""} autoHideDuration={3000} onClose={() => {
        if(resType === 'success')
        {
          history.push('/signin');
        }
        setResMessage("");
        setResType("");
      }}>
        <Alert onClose={() => {
          if(resType === 'success')
          {
            history.push('/signin');
          }
          setResMessage("");
          setResType("");
        }} severity={resType}>
          {resMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Signup;
