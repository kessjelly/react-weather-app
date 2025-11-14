import axios from "axios";
import { useState } from "react";

import "./Weather.css";

type WeatherData = {
  ready: boolean;
  temperature?: number;
  wind?: number;
  humidity?: number;
  description?: string;
  icon?: string;
  feelsLike?: number;
  city?: string;
  date?: string;
};

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>({ ready: false });

  function handleResponse(response: any) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      date: "Monday 10:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weather-container">
          <header>
            <form className="search-form" id="search-form">
              <input
                type="search"
                placeholder="Enter your city..."
                required
                id="search-form-input"
                className="search-form-input"
              />
              <input
                type="submit"
                value="Search"
                className="search-form-button"
              />
            </form>
          </header>
          <main>
            <div className="app-data">
              <div>
                <h1 className="app-city-name" id="app-city-name">
                  {weatherData.city}
                </h1>
                <p className="app-details">
                  <span id="day">{weatherData.date}</span>,{" "}
                  <span id="description">{weatherData.description}</span>
                  <br />
                  Humidity:
                  <strong id="humidity"> {weatherData.humidity}</strong>, Wind:
                  <strong id="speed"> {weatherData.wind}</strong>
                  <br />
                  <span id="feel-like mt-3">
                    Feels like:{" "}
                    <strong id="feel-like-temp">
                      {Math.round(weatherData.feelsLike)}°C
                    </strong>
                  </span>
                </p>
              </div>
              <div className="app-temperature-container">
                <div className="app-emoji" id="icon">
                  <img src={weatherData.icon} alt={weatherData.description} />
                </div>
                <div className="app-temperature" id="temperature">
                  {Math.round(weatherData.temperature)}
                </div>
                <div className="app-temp-unit">°C</div>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </main>
          <footer>
            This website was coded by
            <a href="https://github.com/kessjelly" target="_blank">
              {" "}
              Jessica Kelly
            </a>
            , is open-sourced on
            <a href="https://github.com/kessjelly/meteorologie" target="_blank">
              Github
            </a>
            and hosted on
            <a href="https://meteorologie-app.netlify.app/" target="_blank">
              Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let city = "Brisbane";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
