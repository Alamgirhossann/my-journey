import "../../scss/signinSignup/signup.scss";
import google from "../../images/Google.png";
import facebook from "../../images/social-facebook.png";
import { auth, db } from "../../App";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let Navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
     if (userCredential) {
  
      db.ref('PersonDetail').push().update({
        sold:true,
        firstName: fName,
        lastName: lName,
        email: email,
        uid:  userCredential.user.uid
      });
      Navigate('/home')
     }
    })
    .catch((error) => {
      const  errorCode = error.code;
      const  errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
  };


  return (
    <div className="signup-section">
      <div className="container">
        <h3 className="text-center">SIGN UP FOR ACCESS YOUR BOOKING</h3>
        <div className="form-control-section">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="First name"
                required
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault04" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationDefault05"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-12">
              <button onClick={submit} className="btn signup-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="social-media-sign">
          <div className="row">
            <div className="col-md-6">
              <div className="common-signin-btn">
                <img src={google} alt="" />
                <button type="submit">Sign Up with Google</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="common-signin-btn">
                <img src={facebook} alt="" />
                <button type="submit">Sign Up with Facebook</button>
              </div>
            </div>
            <p>
              Do you have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
