import React from "react";
import seftyLogo from "../../images/safety.png";
import '../../scss/home/safty.scss';

const Sefty = () => {
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
      <div className="sefety-section">
        <div className="row">
          <div className="col-lg-1">
            <figure>
              <img src={seftyLogo} alt="" />
            </figure>
          </div>
          <div className="col-lg-11">
            <div className="safety-text">
              <h2>Safety+</h2>
              <p className='opt-travel'>
                Opt to Travel Safe with MyJourney.ltd <a href="#">KNOW MORE</a>
              </p>
              
            </div>
            <div className="row">
            <p className='py-3'>
                {" "}
                Look for buses with safety+ tag while booking your journey,
              </p>
              <div className="col-lg-4">
                <h3>Sanitized Bus</h3>
                <p>
                  All Safety+ buses are sanitized and disinfected before and
                  after every trip.
                </p>
              </div>
              <div className="col-lg-4">
                <h3>Sanitized Bus</h3>
                <p>
                  All Safety+ buses are sanitized and disinfected before and
                  after every trip.
                </p>
              </div>
              <div className="col-lg-4">
                <h3>Sanitized Bus</h3>
                <p>
                  All Safety+ buses are sanitized and disinfected before and
                  after every trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sefty;
