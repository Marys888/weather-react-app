import React, { useState } from "react";
// import { WeatherIcon } from "./WeatherIcon";
import "./Weather.css";

export function WeatherTemperature(props) {
    const [unit, setUnit] = useState("°C");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("°C");
        if(props.temperature > 9) {
            return 
        }
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("°F");
    }

    const displayedTemperature = unit === "°C" ? Math.round(props.temperature) : Math.round((props.temperature * 9/5) + 32);
    const icon = props.icon;

    return (
        <div className="weather-temperature">
            <img src={icon} alt="weather-icon" />
            <span className="weather-temperature-number">{displayedTemperature}</span>
            <span className="weather-temperature-unit">
                <a className="weather-temperature-unit"href="/" onClick={showCelsius}>°C |</a> 
                <a className="weather-temperature-unit"href="/" onClick={showFahrenheit}>°F</a>
            </span>
        </div>
    );
}