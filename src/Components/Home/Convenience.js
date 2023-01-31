import React, { useEffect } from "react";
import mobileLogo from "../../images/banner 11.jpg";
import "../../scss/home/convenience.scss";

const Convenience = () => {
  
  return (
    <div className="convenience-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <figure>
              <img className='img-fluid' src={mobileLogo} alt="" />
            </figure>
          </div>
          <div className="col-lg-6">
          <div className="convenience-text">
              <h2>CONVENIENCE ON-THE-GO.</h2>
              <p>Enjoy the following exclusive features on the MyJourney.ltd app</p>
              <p>
                Last Minute Booking - In a hurry to book a bus at the last
                minute? Choose the bus passing from your nearest boarding point
                and book in a few easy steps.
              </p>
              <p>
                Boarding Point Navigation - Never lose your way while travelling
                to your boarding point!
              </p>
              <p>
                Comprehensive Ticket Details- Everything that you need to make
                the travel hassle free - rest stop details, boarding point
                images, chat with co-passengers, wake-up alarm and much more!
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convenience;
