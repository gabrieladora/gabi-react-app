import React from "react";
import "./FirstCard.css";

export default function FirstCard() {
  return (
    <div className="FirstCard">
      <div className="card-first" style={{ width: "30rem" }}>
        <div className="card-body-first">
          <p>
            {" "}
            <small>Current city:</small>
            <em>Los Angeles</em>
          </p>
          <h5 className="card-title" id="card-title-first">
            Day
          </h5>
          <br />
          <img src="" id="primaryIcon" alt="" />
          <br />
          <strong id="temperature">10</strong>
          <span className="units">
            <button href="#" id="celsius-link" className="active" /> ℃ |{" "}
            <button href="#" id="fahrenheit-link" /> ℉{" "}
          </span>
          <p id="primary-description"></p>
          <p className="wind-speed" id="wind-speed"></p>
          <p className="humidity" id="humidity"></p>
          <h6 className="card-subtitle-first">Sunny</h6>
          <p id="note"></p>
          <p id="time">
            <small>Last updated at </small>15:00h
          </p>
        </div>
      </div>
    </div>
  );
}
