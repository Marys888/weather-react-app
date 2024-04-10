import axios from "axios";
import React, {useState} from "react";
import "./Weather.css";

export function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
        setWeatherData({
            city:response.data.name,
            temperature:response.data.main.temp,
            description:response.data.description,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
        });
        setReady(true);
    }
    if(ready) {
        return (
            <div className="Weather">
                <form className="weather-form">
                    <div className="weather-form-container">
                        <input className="weather-form-search"type="search" placeholder="search a city..."/>
                        <input className="weather-form-submit" type="submit" value="search" />
                    </div>
                </form>
                <h1 className="weather-city">{weatherData.city}</h1>
                <ul className="app-list">
                    <li>Tuesday 12:29</li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="weather-container">
                    <div className="weather-temperature">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" />
                        <span className="weather-temperature-number">{weatherData.temperature}</span>
                        <span className="weather-temperature-unit">°C | °F</span>
                    </div>
                    <div className="weather-descrption">
                        <ul className="weather-descrption-listed">
                            <li>Humidity: {weatherData.humidity}</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}