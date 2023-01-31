import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { db } from "../../App";
import "../../scss/home/header.scss";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FilterBusSchedule, GetDate, GetPending } from "../../Functions";
import BookingDestination from "../../Screen/Booking/BookingDestination";

const Header = () => {
  const { booking, date, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateValue, setDateValue] = date;
  const [bookingValue, setBookingValue] = booking;
  let Navigate = useNavigate();
  console.log(user.email);

  var [promised, setpromised] = useState(false);

  var [DateSchedule1, setDateSchedule] = useState([]);
  var [cities1, setCities] = useState([]);
  var [pendingBooking1, setPendingBooking] = useState([]);

  let [ArrivalTerminal, changeArrivalTerminal] = useState(""); // For searching bar
  let [ArrivalTerminalModal, ArrivalTerminalModalHandler] = useState(false); // For changing Model
  var [ArrivalSelected, changeArrivalSelected] = useState(cities1[0]); // Final Last value of search bar
  const arrivalFinal = (city) => {
    // Handler when the City is selected
    changeArrivalTerminal("");
    changeArrivalSelected(city);
    ArrivalTerminalModalHandler(false);
  };

  let [DestinationTerminal, changeDestinationTerminal] = useState("");
  let [DestinationTerminalModal, DestinationTerminalModalHandler] =
    useState(false);
  var [DestinationSelected, changeDestinationSelected] = useState(cities1[0]);
  function destinationFinal(city) {
    changeDestinationTerminal("");
    changeDestinationSelected(city);
    DestinationTerminalModalHandler(false);
  }

  let [DateData, changeDateData] = useState(DateSchedule1[0]);
  // In case if date is not found then disabling the find bus button
  var disable = false;
  var disableColor = "gray";
  if (DateSchedule1.length <= 0) {
    disable = true;
    disableColor = "black";
  }

  console.log(
    ArrivalSelected,
    ArrivalTerminalModal,
    ArrivalTerminal,
    pendingBooking1,
    DateData,
    DestinationSelected,
    DestinationTerminalModal,
    DestinationTerminal
  );

  var citiesTemp = [];
  var busScheduleTemp = [];
  useEffect(() => {
    const CitiesNode = db.ref().child("Cities"); // Getting the city reference
    CitiesNode.once("value")
      .then((datasnap) => {
        citiesTemp = datasnap.val();
      })
      .then((readCountTxn) => {
        // When the propmise to get the city is made
        const BusScheduleNode = db.ref().child("BusSchedule");
        BusScheduleNode.once("value")
          .then((datasnap) => {
            busScheduleTemp = datasnap.val();
          })
          .then((readCountTxn) => {
            // When promise to get the BusSchedule is made
            var dateTemp = GetDate(busScheduleTemp);
            var pendingTemp = FilterBusSchedule(busScheduleTemp, user.email);
            pendingTemp = GetPending(pendingTemp);
            setpromised(!promised);
            setDateSchedule(dateTemp);
            setCities(citiesTemp);
            setPendingBooking(pendingTemp);

            arrivalFinal(citiesTemp[0]);
            destinationFinal(citiesTemp[0]);
            changeDateData(dateTemp[0]);
          });
      });
  }, []);

  return (
    <div className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
          <BookingDestination/>
            {
              // <form className="row g-3 needs-validation">
            //   <div className="col-md-12">
            //     <input
            //       type="text"
            //       className="form-control"
            //       id="validationCustom01"
            //       placeholder="Form"
            //       required
            //       onChange={(e) => setFrom(e.target.value)}
            //     />
            //     <div className="valid-feedback">Looks good!</div>
            //   </div>
            //   <div className="col-md-12">
            //     <input
            //       type="text"
            //       className="form-control"
            //       id="validationCustom02"
            //       placeholder="To"
            //       required
            //       onChange={(e) => setTo(e.target.value)}
            //     />
            //     <div className="valid-feedback">Looks good!</div>
            //   </div>
            //   <div className="col-md-12">
            //     <input
            //       type="date"
            //       className="form-control"
            //       id="validationCustom05"
            //       placeholder="Date"
            //       required
            //       onChange={(e) => setDateValue(e.target.value)}
            //     />
            //     <div className="invalid-feedback">Please provide date</div>
            //   </div>
            //   {loading ? (
            //     <div
            //       style={{
            //         display: "flex",
            //         justifyContent: "center",
            //         alignItems: "center",
            //       }}
            //     >
            //       <div className="spinner-border text-dark " role="status">
            //         <span className="visually-hidden ">Loading...</span>
            //       </div>
            //     </div>
            //   ) : (
            //     <div className="col-md-12">
            //       <button
            //         // onClick={search}
            //         className="btn search-btn"
            //         type="submit"
            //       >
            //         Search
            //       </button>
            //     </div>
            //   )}
            // </form>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
