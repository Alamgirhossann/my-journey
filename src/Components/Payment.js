import bkash from "../images/bkash.png";
import Rocket from "../images/rocket.png";
import nagad from "../images/nagad.png";
import "../scss/manageBooking/cancel.scss";
import React, { useState, useContext } from "react";
import { db, UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const { bookingDetail, date, user, seatNum } = useContext(UserContext);
  const [bookingDetailValue] = bookingDetail;
  const [dateValue] = date;
  const [userValue] = user;
  const [seatNumValue] = seatNum;
  let Navigate = useNavigate();

  
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h3>welcome to Payment Process</h3>
      <p>You can payment through these methods</p>
      <div style={{ padding: "15px 0" }}>
        <p>
          <img style={{ height: "65px", width: "115px" }} src={bkash} alt="" />
        </p>
        <h5>01719418587</h5>
      </div>
      <div style={{ lineHeight: "10px", padding: "15px 0" }}>
        <p>
          <img style={{ height: "65px", width: "115px" }} src={Rocket} alt="" />
        </p>
        <h5>017xxxxxxxx</h5>
      </div>
      <div style={{ lineHeight: "10px", padding: "15px 0" }}>
        <p>
          <img style={{ height: "65px", width: "115px" }} src={nagad} alt="" />
        </p>
        <h5>017xxxxxxxx</h5>
      </div>
      <div className="mt-4">
        <div className="container">
          <h3 className="text-center">Enter Transaction ID</h3>
          <div className="cancel-form-control">
            <div style={{ width: "100%" }}>
              <form className="row g-3 d-flex justify-content-center">
                <div className="col-md-5">
                  <input
                    style={{ border: "1px solid #FF735C" }}
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Enter Transaction ID"
                    required
                    onChange={(e) => setPaymentId(e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  {loading ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="spinner-border text-dark " role="status">
                        <span className="visually-hidden ">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      // onClick={bookNow}
                      className="btn cancel-btn text-white"
                      style={{ background: "#FF735C" }}
                      type="submit"
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
