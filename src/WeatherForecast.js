import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast">
     
        <div className="row first-forecast" id="first-forecast"></div>
          <div className="col">
            <div className="WeatherForecast-day">Monday</div> 
        <WeatherIcon code="01d" size={50} />
        <div className="WeatherForecast-temperatures">
          <span className="MaxTemperature"> 22℃</span>
          <span className="MinTemperature">15℃</span>
          
        </div>
        </div>
        <footer>
          <em>
            {" "}
            <a href="https://github.com/gabrieladora/gabi-react-app" target="_blank" rel="noopener noreferrer">
              Open-source code
            </a>{" "}
            by Gabriela-Dora
          </em>
        </footer>
         
      </div>
     </div>
     
  
  );
}
