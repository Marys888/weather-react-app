import React, {useState} from "react";

export function WeatherTemperature (props) {
    const [unit, setUnit] = useState("°C");
    function showCelsius(event) {
        event.preventDefault();
        setUnit(Math.round(props.temperature))
    }
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit(Math.round((props.temperature* 9/5) + 32));
    }
    return (
        <div className="weather-temperature">
                        <img src={props.iconUrl} alt="weather-icon" />
                        <span className="weather-temperature-number">{Math.round(props.temperature)}</span>
                        <span className="weather-temperature-unit">
                            <a href="/" onClick={showCelsius}>{unit}</a> | 
                            <a href="/"onClick={showFahrenheit}>°F</a>
                        </span>
                    </div>
    )
}