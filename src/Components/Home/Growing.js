import React from "react";
import "../../scss/home/growing.scss";

const Growing = () => {
  return (
    <div className="growing-section" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <h2>THE NUMBERS ARE GROWING!</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="growing-card">
              <div className="card-body">
                <h6 className="card-title">CUSTOMERS</h6>
                <h2>36 M</h2>
                <p className="card-text">
                  Travel is trusted by over 36 million happy customers globally
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="growing-card">
              <div className="card-body">
                <h6 className="card-title">OPERATORS</h6>
                <h2>3500</h2>
                <p className="card-text">
                  network of over 3500 bus operators worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="growing-card">
              <div className="card-body">
                <h6 className="card-title">BUS TICKETS</h6>
                <h2>220+ M</h2>
                <p className="card-text">
                  Over 2000 million trips booked using MyJourney.ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growing;
