import React, { useState } from "react";
import "./FirstCard.css";
import axios from "axios";

export default function FirstCard() {
  const[ready, setReady]= useState(false);
  const[weather,setWeather]= useState(null);
  
  
  function handleResponse(response){
   console.log(response.data);
  
    setWeather({
      temperature: response.data.main.temp ,
      wind : response.data.wind.speed ,
      humidity:response.data.main.humidity , 
      description: response.data.weather[0].description, 
      city: response.data.name
    } ); 
    
    setReady(true);
  }
  if (ready) {
    return(
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
          <strong id="temperature"> {Math.round(weather.temperature)} </strong>
          <span className="units">
            <button href="#" id="celsius-link" className="active" /> ℃ |{" "}
            <button href="#" id="fahrenheit-link" /> ℉{" "}
          </span>
          <p id="primary-description"></p>
          <p className="wind-speed" id="wind-speed">Wind speed: {Math.round(weather.wind)} km/h</p>
          <p className="humidity" id="humidity">Humidity: {weather.humidity}%</p>
          <h6 className="card-subtitle-first">{weather.description} </h6>
          <p id="note"></p>
          <p id="time">
            <small>Last updated at </small>15:00h
          </p>
        </div>
      </div>
    </div>
    )
  }else{
    let city= "Los Angeles"
     const apiKey="4b3a638fb4d48006da8ec9048f3f42e3"
  let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` ;  
  
  axios.get(url).then(handleResponse)
  return(
    "Loading..."
  )
  }
 
}
