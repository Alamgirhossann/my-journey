import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Link style={{fontSize:'20px'}} to='/'>Go Back Home Page</Link>
      <h1>Thank you for being part of MyJourney family.</h1>
    </div>
  );
};

export default Welcome;
