import React from "react";
import "../../scss/signinSignup/signin.scss";
import google from "../../images/Google.png";
import facebook from "../../images/social-facebook.png";
import { auth, UserContext } from "../../App";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  let Navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log(userCredential);
    if (userCredential) {
      Navigate('/home')
    }
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  };
  return (
    <div className="signin-section">
      <div className="container">
        <h3 className="text-center">SING IN TO BUY YOUR TICKET</h3>
        <div className="form-control-section">
          <form className="row g-3 text-center">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forget">
              <a href="#">Forget Password?</a>
            </div>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="spinner-border text-dark " role="status">
                  <span className="visually-hidden ">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="col-md-12">
                <button
                  onClick={signIn}
                  className="btn signin-btn"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="social-media-sign">
          <div className="row">
            <div className="col-md-6">
              <div className="common-signin-btn">
                <img src={google} alt="" />
                <button type="submit">Sign In with Google</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="common-signin-btn">
                <img src={facebook} alt="" />
                <button type="submit">Sign In with Facebook</button>
              </div>
            </div>
            <p>
              Do you have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
