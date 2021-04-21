import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

      export default function Form(props) {
  const[city, setCity]=useState(props.data.city)
  
  
  
  function search(){
    const apiKey="4b3a638fb4d48006da8ec9048f3f42e3"
  let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` ;  
  
  axios.get(url).then(handleResponse)
  }
  
  
  function handleSubmit(event){
    event.preventDefault();
    alert(city)
    search()
  }
  function handleChange(event){
   setCity(event.target.value)
  }
  
  return (
    <div className="Form">
      <div className="card-body">
        <div className="content">
          <div className="row">
            <div className="col">
              <form id="input-form " onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="input-city"
                  className="city"
                  placeHolder="Los Angeles"
                   autoFocus="on"
                   onChange={handleChange}
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
