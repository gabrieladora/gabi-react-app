import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="card-body">
        <div className="content">
          <div className="row">
            <div className="col">
              <form id="input-form">
                <input
                  type="text"
                  id="input-city"
                  className="city"
                  placeHolder="Los Angeles"
                   autoFocus="on"
                />
                <input
                  type="submit"
                  className="search-engine"
                  value=" 📍Search city"
                />
              </form>
              <button id="location-button">📍Click for your location📍</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
