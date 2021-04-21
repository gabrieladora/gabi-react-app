import React, { useState } from "react";
import "./FirstCard.css";
import axios from "axios";
import WeatherInformations from "./WeatherInformations";

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
      date: new Date(response.data.dt * 1000) , 
      city: response.data.name
    } ); 
    
    setReady(true);
  }
  if (ready) {
    return(
      <div className="WeatherInformations">
      
      <WeatherInformations data={weather} />
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
