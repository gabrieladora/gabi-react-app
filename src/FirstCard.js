import React, { useState } from "react";
import "./FirstCard.css";
import axios from "axios";
import WeatherInformations from "./WeatherInformations";
import WeatherForecast from "./WeatherForecast";

export default function FirstCard(props) {
  const[weather,setWeather]= useState({ ready: false });
   const[city, setCity]=useState(props.defaultCity);
  
    function handleResponse(response){
   //console.log(response.data);
    setWeather({
        ready : true,
      temperature: response.data.main.temp ,
      wind : response.data.wind.speed ,
      humidity:response.data.main.humidity , 
      description: response.data.weather[0].description, 
      date: new Date(response.data.dt * 1000) , 
      city: response.data.name , 
       icon: response.data.weather[0].icon
      
    } );  }
  function search(){
  const apiKey="4b3a638fb4d48006da8ec9048f3f42e3";
  let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  
  axios.get(url).then(handleResponse)

  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleChange(event){
   setCity(event.target.value)
  }
  if (weather.ready) {
    return(
<div className="FormAndFirstCard">
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
 <div className="WeatherInformations">
          <WeatherInformations data={weather} />
          <WeatherForecast />
      </div> 
</div>
 )
  }else{
    search();
    return "Data is loading..."
  }}
