import React from "react";
import "../../scss/manageBooking/changeDate.scss";

const ChangeDate = () => {
  return (
    <div className="change-date-section">
      <div className="container">
        <h3 className="text-center">Change Travel Date</h3>
        <p className="text-center">
          Verify your details, and Change Travel Date
        </p>
        <div className="change-date-form-control">
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
              <button className="btn change-date-btn" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeDate;
