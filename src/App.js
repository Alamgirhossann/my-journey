import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home/Home";
import Cancel from "./Components/ManageBooking/Cancel";
import ChangeDate from "./Components/ManageBooking/ChangeDate";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import Help from "./Components/Help";
import Signin from "./Components/SignupSignin/Signin";
import Signup from "./Components/SignupSignin/Signup";
import Ryde from "./Components/Ryde/Ryde";
import OperatorDetail from "./Components/Home/OperatorDetail";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useState } from "react";
import { createContext } from "react";
import SearchResult from "./Components/SearchResult";
import Payment from "./Components/Payment";
import Welcome from "./Components/Welcome";
import BookingDetail from "./Components/BookingDetail";

const firebaseConfig = {
  apiKey: "AIzaSyAzmJ1KzIDeeAWv-HhmJb8pcDfpPUxtzZk",
  authDomain: "travel-com-8173c.firebaseapp.com",
  projectId: "travel-com-8173c",
  storageBucket: "travel-com-8173c.appspot.com",
  messagingSenderId: "932297182107",
  appId: "1:932297182107:web:9a6169dae9bc831174af3e",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);
export const db = firebase.database();

export const UserContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [booking, setBooking] = useState([]);
  const [bookingDetail, setBookingDetail] = useState({});
  const [date, setDate] = useState([]);
  const [seatNum, setSeatNum] = useState([]);
  console.log(user, booking, seatNum);

  useEffect(() => {
    const authSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return authSubscribe;
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border text-dark " role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user: [user, setUser],
        booking: [booking, setBooking],
        bookingDetail: [bookingDetail, setBookingDetail],
        date: [date, setDate],
        seatNum: [seatNum, setSeatNum],
      }}
    >
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          {!user ? (
            <>
              <Route path="/" element={<Signin />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/changeDate" element={<ChangeDate />} />
              <Route path="/ryde" element={<Ryde />} />
              <Route path="/searchResult" element={<SearchResult />} />
              <Route path="/operator-detail" element={<OperatorDetail />} />
              <Route path="/payment" element={<Payment />}></Route>
              <Route path="/welcome" element={<Welcome />}></Route>
              <Route
                path="/bookingDetail/:id"
                element={<BookingDetail />}
              ></Route>
            </>
          )}

          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
