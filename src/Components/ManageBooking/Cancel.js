import React from "react";
import "../../scss/manageBooking/cancel.scss";

const Cancel = () => {
  return (
    <div className="cancel-section">
      <div className="container">
        <h3 className="text-center">Cancel your Ticket</h3>
        <div className="cancel-form-control">
          <form className="row g-3 text-center">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Enter Your Ticket No"
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="col-md-2">
              <button className="btn cancel-btn" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
