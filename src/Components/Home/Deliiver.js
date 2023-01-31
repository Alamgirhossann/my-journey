import React from "react";
import safety from "../../images/safety.png";
import helpline from "../../images/helpline.png";
import price from "../../images/taka.png";
import gift from "../../images/gift.png";
import friendship from "../../images/friendship.png";
import "../../scss/home/deliver.scss";

const Deliiver = () => {
  return (
    <div className="deliver-section">
      <div className="container">
        <figure>
          <img src={friendship} alt="" />
        </figure>
        <h2 className="pb-5">WE PROMISE TO DELIVER</h2>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          <div className="col" data-aos="fade-up" data-aos-duration="400">
            <div className="card">
              <div className="d-flex justify-content-center pt-3">
                <img src={safety} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">SAFETY+</h5>
                <p className="card-text">
                  With Safety+ we have brought in a set of measures like
                  Sanitized buses, etc. to ensure you travel safely.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-duration="800">
            <div className="card">
              <div className="d-flex justify-content-center pt-3">
                <img src={helpline} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">SUPERIOR CUSTOMER SERVICE</h5>
                <p className="card-text">
                  We put our experience and relationships to good use and are
                  available to solve your travel issues.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-duration="1200">
            <div className="card">
              <div className="d-flex justify-content-center pt-3">
                <img src={price} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">LOWEST PRICES</h5>
                <p className="card-text">
                  We always give you the lowest price with the best partner
                  offers.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-duration="1600">
            <div className="card">
              <div className="d-flex justify-content-center pt-3">
                <img src={gift} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">UNMATCHED BENEFITS</h5>
                <p className="card-text">
                  We take care of your travel beyond ticketing by providing you
                  with innovative and unique benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliiver;
