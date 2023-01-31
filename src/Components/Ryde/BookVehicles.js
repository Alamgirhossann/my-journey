import React from "react";
import '../../scss/ryde/bookVehicles.scss';

const BookVehicles = () => {
  return (
    <div className="book-vehicle">
      <div className="container">
        <h4 className="mb-3">
          <strong>Vehicles you can book</strong>
        </h4>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="vehicles-card">
              <div className="card-body">
                <h5 className="card-title">Hatchbacks and Sedans</h5>
                <p className="card-text">Ideal for about 2-4 people</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="vehicles-card">
              <div className="card-body">
                <h5 className="card-title">SUVs</h5>
                <p className="card-text">Ideal for about 4-7 people</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="vehicles-card">
              <div className="card-body">
                <h5 className="card-title">Tempo Travellers</h5>
                <p className="card-text">Tempo Travellers</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="vehicles-card">
              <div className="card-body">
                <h5 className="card-title">Buses and Mini Buses</h5>
                <p className="card-text">Ideal for more than 18 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVehicles;
