import {
  collection,
  documentId,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, UserContext } from "../App";

const BookingDetail = () => {
  const { date, bookingDetail, seatNum } = useContext(UserContext);
  const [dateValue] = date;
  const [bookignDetailValue, setBookingDetailValue] = bookingDetail;
  const [selectedSeat, setSelectedSeat] = seatNum;
  const { from, to, departure, price, route, busType, organization, seat } =
    bookignDetailValue;
  const { id } = useParams();
  let Navigate = useNavigate();



  

  const payment = () => {
    Navigate("/payment", { replace: true });
  };

  
  return (
    <div style={{ padding: "100px" }}>
      <h4>Booking Detail</h4>
      <div className="">
        <p className="card-text">Journey Date: {dateValue}</p>
      </div>
      <div
        className=" my-4 row"
        // style={{ width: "100%", textAlign: "center" }}
      >
        <div className="card-body col-5">
          
          <p className="card-text">From: {from}</p>
          <p className="card-text">to: {to}</p>
          <p className="card-text">Departure: {departure}</p>
          <p className="card-text">Operator: {organization}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Bus Type: {busType}</p>
          <p className="card-text">Route: {route}</p>



          <button onClick={payment}>Payment Now</button>
      
      
        </div>
      </div>
      
    </div>
  );
};

export default BookingDetail;
