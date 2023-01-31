import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../App";
import account from "../../images/account.png";
import logo from "../../images/logo-f.png";
import "../../scss/home/nav.scss";

const Navbar = ({ user }) => {
  let Navigate = useNavigate();
  // const isAuth = JSON.parse(sessionStorage.getItem("auth"));
  console.log(user);
  const signout =()=>{
    auth.signOut();
    Navigate('/signin')
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-background fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white" to={user ? "/home" : "/"}>
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" to="/home">
                    Ticket
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/ryde">
                    Ryde
                  </Link>
                </li>
               
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manage Booking
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item " to="/cancel">
                        Cancle
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/changeDate">
                        Change Travel Date
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" aria-disabled="true">
                    {user.email}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    // to='/'
                    className="nav-link text-white"
                    aria-disabled="true"
                    onClick={signout}
                    style={{ cursor: "pointer" }}
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img style={{ height: "1.8rem" }} src={account} alt="" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Signin
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/help"
                aria-disabled="true"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
