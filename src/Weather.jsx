
import React, {useState} from "react";
import axios from "axios";
import FormatttedDate from "./FormattedDate";
import "./Weather.css";
import {WeatherTemperature} from "./WeatherTemperature";

export function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            city:response.data.name,
            temperature:response.data.main.temp,
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            date:new Date(response.data.dt*1000),
        })
        
    }
    function search(){
        let apiKey = "c023dee45019b4fde50ace28a9ca90ed";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search()
    }
    function handleCitySearch(event) {
        setCity(event.target.value);
    }

    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} className="weather-form">
                    <div className="weather-form-container">
                        <input onChange={handleCitySearch} className="weather-form-search"type="search" placeholder="Search a city..."/>
                        <input className="weather-form-submit" type="submit" value="search" />
                    </div>
                </form>
                <h1 className="weather-city">{weatherData.city}</h1>
                <ul className="app-list">
                    <li><FormatttedDate date={weatherData.date} /></li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="weather-container">
                    <WeatherTemperature temperature={weatherData}/>
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
        search();
        return "Loading...";
    } 
}