import axios from "axios";
import React, {useState} from "react";
import "./Weather.css";

export function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            city:response.data.name,
            temperature:response.data.main.temp,
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            date:"Tuesday 12:29",
        });
        
    }
    if(weatherData.ready) {
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
                    <li>{weatherData.date}</li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="weather-container">
                    <div className="weather-temperature">
                        <img src={weatherData.iconUrl} alt="weather-icon" />
                        <span className="weather-temperature-number">{Math.round(weatherData.temperature)}</span>
                        <span className="weather-temperature-unit">°C | °F</span>
                    </div>
                    <div className="weather-descrption">
                        <ul className="weather-descrption-listed">
                            <li>Humidity: {weatherData.humidity} %</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        let apiKey = "c023dee45019b4fde50ace28a9ca90ed";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    return "Loading...";
}