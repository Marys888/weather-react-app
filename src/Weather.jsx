import React from "react";
import "./Weather.css";

export function Weather() {
    return (
        <div className="Weather">
            <form className="weather-form">
                <div className="weather-form-container">
                    <input className="weather-form-search"type="search" placeholder="search a city..."/>
                    <input className="weather-form-submit" type="submit" value="search" />
                </div>
            </form>
            <h1 className="weather-city">Kyiv</h1>
            <ul className="app-list">
                <li>Tuesday 12:29</li>
                <li>Clear Sky</li>
            </ul>
            <div className="weather-container">
                <div className="weather-temperature">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" />
                    24°C | °F
                </div>
                <div className="weather-descrption">
                    <ul className="weather-descrption-listed">
                        <li>Humidity: 30%</li>
                        <li>Wind: 16 km/h</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}