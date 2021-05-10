import React from "react";

export default function WeatherTemperature(props){
    return(
<div className="WeatherTemperature">
     <strong id="temperature"> {Math.round(props.celsius)} </strong>
      <span className="units">
            <button href="#" id="celsius-link" className="active" /> ℃ |{" "}
            <button href="#" id="fahrenheit-link" /> ℉{" "}
          </span>

</div>




    )
}