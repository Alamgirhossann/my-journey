import React from "react";
import share from '../../images/share.jpg';
import gps from '../../images/gps.jpg';
import clean from '../../images/clean.jpg';

const LooksPartners = () => {
  return (
    <div className="looks-partner my-5">
      <div className="container">
          <h4 className='mb-4 text-left'><strong>Look for partners to get</strong></h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="look-partner-card">
              <img src={share} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="look-partner-card">
              <img src={gps} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="look-partner-card">
              <img src={clean} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LooksPartners;
