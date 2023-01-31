import React from "react";
import facebook from "../../images/Social Icons (5).png";
import twitter from "../../images/Social Icons (6).png";
import Logo from "../../images/logo-f.png";
import linkedin from "../../images/Social Icons (7).png";
import googlePlay from "../../images/google-play.png";
import appleStore from "../../images/app-store.png";
import "../../scss/home/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <figure>
              <img src={Logo} alt="" />
            </figure>
            <p>
              MyJourney.ltd is the Nepal and Bangladesh online booking service
              trusted by over 2 thousand happy customers. MyJourney.ltd offers
              booking through its website,iOS and Android mobile apps
              for all major routes.
            </p>
            <div className="footer-icon">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <p className='fw-bold pb-2'>About MyJourney.ltd</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>MyJourney.ltd on Mobile</p>
          </div>
          <div className="col-lg-2">
            <p className='fw-bold pb-2'>Info </p>
            <p>privacy Policy</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Bus Operator Ragistration</p>
          </div>
          <div className="col-lg-2">
            <p className='fw-bold pb-2'>Global Sites </p>
            <p>Nepal</p>
            <p>Bangladesh</p>
          </div>
          <div className="col-lg-2">
            <p className='fw-bold pb-2'>Our Partners </p>
            <p>Annapurna</p>
            <p>Star Transport Service pvt ltd</p>
            <p>Vehicle Consult pvt. Ltd</p>
            <p>Nabil Paribahon</p>
            <p>Green Line</p>
            <p>Shamoly</p>
            <p>Hanig Enterprice</p>
          </div>
        </div>
        <div className="app-store">
          <figure>
            <img src={googlePlay} alt="" />
          </figure>
          <figure>
            <img src={appleStore} alt="" />
          </figure>
        </div>
        <p className="text-center">Ⓒ 2022 MyJourney.ltd All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
