import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const SearchResult = () => {
  const {booking, date} = useContext(UserContext);
  const [dateValue] = date;
  const [bookingValue] = booking;
  console.log(dateValue, bookingValue);

  return (
    <div style={{ padding: "100px" }}>
      <h4>Booking Information</h4>
      <div className="">
        <p className="card-text">Journey Date: {dateValue}</p>
      </div>
      {bookingValue.map((doc) => (
        <div
          key={doc.id}
          className="card my-4"
          style={{ width: "100%", textAlign: "center" }}
        >
          <div className="card-body">
            <p className="card-text">From: {doc.from}</p>
            <p className="card-text">to: {doc.to}</p>
            <p className="card-text">Departure: {doc.departure}</p>
            <p className="card-text">Operator: {doc.organization}</p>
            <p className="card-text">Price: {doc.price}</p>
            <p className="card-text">Bus Type: {doc.busType}</p>
            <p className="card-text">Route: {doc.route}</p>
          </div>
          <Link to={`/bookingDetail/${doc.id}`}>View Detail</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
