import React from "react";
import "../../scss/ryde/ryde.scss";
import airport from "../../images/banner 3 airport.jpg";
import outstation from "../../images/banner2 outstation.jpg";
import rant from "../../images/banner 1 hourly rent (2).jpg";
import LooksPartners from "./LooksPartners";
import BookVeguckes from "./BookVehicles";
import BookVehicles from "./BookVehicles";
import CustomerReview from "./CustomerReview";
import FAQ from "./FAQ";
import Blog from "./Blog";

const Ryde = () => {
  return (
    <div className="ryde-section">
      <div className="container">
        <div className="chosse-vehicle">
          <h1>
            Rent Cabs, Tempo Travellers <br /> & Buses with best drivers
          </h1>
          <div className="select-trip mt-4">
            <p className='m-0'>SELECT TRIP TYPE</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="trip-card">
                  <div className="d-flex justify-content-center pt-3">
                    <img src={airport} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">SUPERIOR CUSTOMER SERVICE</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="trip-card">
                  <div className="d-flex justify-content-center pt-3">
                    <img src={outstation} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">LOWEST PRICES</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="trip-card">
                  <div className="d-flex justify-content-center pt-3">
                    <img src={rant} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">UNMATCHED BENEFITS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookVehicles />
        <LooksPartners />
        {/* <CustomerReview /> */}
        <FAQ />
        <Blog/>
      </div>
    </div>
  );
};

export default Ryde;
