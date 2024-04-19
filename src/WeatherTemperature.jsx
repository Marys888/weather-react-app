import React, { useState } from "react";
import { WeatherIcon } from "./WeatherIcon";

export function WeatherTemperature(props) {
    const [unit, setUnit] = useState("°C");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("°C");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("°F");
    }

    const displayedTemperature = unit === "°C" ? Math.round(props.temperature) : Math.round((props.temperature * 9/5) + 32);

    return (
        <div className="weather-temperature">
            <WeatherIcon icon={props.iconUrl}/>
            <span className="weather-temperature-number">{displayedTemperature}</span>
            <span className="weather-temperature-unit">
                <a href="/" onClick={showCelsius}>°C</a> |
                <a href="/" onClick={showFahrenheit}>°F</a>
            </span>
        </div>
    );
}