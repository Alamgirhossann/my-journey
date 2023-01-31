import React from "react";
import "../scss/help.scss";
import rant from "../images/helpDesk1.jpg";

const Help = () => {
  
  return (
    <div className="help-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-section">
              <p className="text-center fw-bold mt-5">
                Non- Booking related issues
              </p>
              <div className="content-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        New bus booking help issue
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Ryde helps you rent a vehicle from the best operators in
                        your city.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        COVID-19 MyJourney.ltd advisory
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We ask you a few simple questions regarding your trip.
                        We work with the best operators in your city to get you
                        detailed quotations so that you get the best deal.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Safety+ feature
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We are currently operational in many cities such as
                        Dinajpur, Sylhet, Coxbazar, Chottogram, Dhaka, Khylna,
                        pokhara, Kathmandu, Biratnagar, Kakarbitha and many
                        more.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Technical Issues
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You can write to us at social media platform. Alternatively,
                        you can request a call back by clicking on the 'Request
                        a Callback' button on any of the quotes you've received.
                        One of our customer service executives will reach out to
                        you.
                      </div>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 text-center">
            <h1>MyJourney.ltd Help</h1>
            <figure className="d-flex justify-content-center">
              <img src={rant} alt="" />
            </figure>
            <h2>24/7 Customer Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
