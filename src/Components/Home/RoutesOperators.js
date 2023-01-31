import React from "react";
import "../../scss/home/routeOperator.scss";

const RoutesOperators = () => {
  return (
    <div
      className="routes-operator-section"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="route">
          <div className="row">
            <div className="col">
              <h4>Top Bus Routes</h4>
              <p>Kathmandu to Pokhara</p>
              <p>Pokhara to Kathmandu</p>
              <p>Khulna to Dhaka</p>
              <p>Dhaka to Chottogram</p>
              <p>Dhaka to Dinajpur</p>
              <p>Dinajpur to Sylhet</p>
              <p>Dhaka to Sylhet</p>
              <p>Khulna to Dinajpur</p>
              <p>Dinajpur to Chottogram</p>
              <p>Dinajpur to Coxbazar</p>
              <p>Dhaka to Coxbazar</p>

            </div>
            <div className="col">
              <h4>Top Cities</h4>
              <p>Kathmandu</p>
              <p>Pokhara</p>
              <p>Dhaka</p>
              <p>Chottogram</p>
              <p>Sylhet</p>
              <p>Khulna</p>
              <p>Coxbazar</p>
            </div>
            <div className="col">
              <h4>Top RTC's</h4>
              <p>Nabil</p>
              <p>Hanif</p>
              <p>Shamoly</p>
              <p>Green Line</p>
            </div>
            <div className="col">
              <h4>Tempo Traveller in Cities</h4>
              <p>Kathmandu to Pokhara</p>
              <p>Pokhara to Kathmandu</p>
              <p>Dinajpur to Dhaka</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="operator">
          <h4>Top Operators</h4>
          <a href="/operator-detail">Annapurna</a> |
          <a href="/operator-detail"> Star Transport</a> |
          <a href="/operator-detail"> Vehicle Consult</a> |
          <a href="/operator-detail"> Himalayan Transport</a> |
          <a href="/operator-detail"> Nabil</a> |
          <a href="/operator-detail"> Hanif</a> |
          <a href="/operator-detail"> Shamoly</a> |
          <a href="/operator-detail"> Green Line</a> |
        </div>
      </div>
    </div>
  );
};

export default RoutesOperators;
