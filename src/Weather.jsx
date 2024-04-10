import axios from "axios";
import {useState} from "react";
import "./Weather.css";

export function Weather() {
    const [WeatherData, setWeatherData] = useState({});
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
        setWeatherData(response.data.main.temperature);
    }
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